<?php

namespace App\Services;

use App\Models\User;
use App\Repository\UserRepository;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    public function __construct(
        private readonly UserRepository $userRepository,
    ) {
    }

    public function login(array $data): bool
    {
        if (!Auth::attempt($data)) {
            return false;
        }

        session()->regenerate();

        return true;
    }

    /**
     * @throws \Exception
     */
    public function register(array $data): User
    {
        /** @var User */
        return $this->userRepository->create($data);
    }

    public function logout(): void
    {
        Auth::logout();

        session()->invalidate();
        session()->regenerateToken();
    }
}
