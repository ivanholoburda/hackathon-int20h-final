<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function __construct(
        private readonly AuthService $authService,
    ) {
    }

    public function loginIndex(): Response
    {
        return Inertia::render('Login/Index');
    }

    public function registerIndex(): Response
    {
        return Inertia::render('Register/Index');
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if (!$this->authService->login($data)) {
            return back()->withErrors([
                'email' => 'Invalid credentials',
            ]);
        }

        return to_route('home');
    }

    /**
     * @throws \Exception
     */
    public function register(RegisterRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $this->authService->register($data);

        return to_route('login');
    }

    public function logout(): RedirectResponse
    {
        $this->authService->logout();
        return to_route('home');
    }
}
