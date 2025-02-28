<?php

namespace Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_login_index(): void
    {
        $response = $this->get('/login')
            ->assertInertia(function (Assert $page) {
                return $page->component('Login/Index');
            });

        $response->assertOk();
    }

    public function test_login(): void
    {
        User::factory()->create([
            'email' => 'test@test.com',
            'password' => Hash::make('password')
        ]);

        $response = $this->postJson('/login', [
            'email' => 'test@test.com',
            'password' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(route('home'));
    }

    public function test_login_fail(): void
    {
        User::factory()->create([
            'email' => 'test@test.com',
            'password' => Hash::make('password')
        ]);

        $response = $this->postJson('/login', [
            'email' => 'test@test.com',
            'password' => 'password1',
        ]);

        $response->assertSessionHasErrors('email');
    }

    public function test_register_index(): void
    {
        $response = $this->get('/register')
            ->assertInertia(function (Assert $page) {
                return $page->component('Register/Index');
            });

        $response->assertOk();
    }

    public function test_register(): void
    {
        $response = $this->postJson('/register', [
            'email' => 'test@test.com',
            'name' => 'Test',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertRedirect(route('login'));
        $this->assertDatabaseHas('users', [
            'email' => 'test@test.com',
        ]);
        $this->assertDatabaseCount('users', 1);
    }

    public function test_register_validation(): void
    {
        User::factory()->create([
            'email' => 'test@test.com',
            'password' => Hash::make('password')
        ]);

        $response = $this->postJson('/register', [
            'email' => 'test@test.com',
            'name' => 'Test',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertUnprocessable();
    }

    public function test_auth_middleware(): void
    {
        $user = User::factory()->create([
            'email' => 'test@test.com',
            'password' => Hash::make('password')
        ]);

        $response = $this
            ->actingAs($user)
            ->get('/')
            ->assertInertia(function (Assert $page) {
                return $page->component('Homepage/Index');
            });

        $response->assertOk();
    }

    public function test_unauthorized(): void
    {
        $this->get('/')->assertRedirect(route('login'));
    }

    public function test_logout(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->postJson('/logout');

        $response->assertRedirect(route('login'));

        $this->assertGuest();
    }
}
