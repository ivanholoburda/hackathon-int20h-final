import React, { useState } from 'react';
import { Avatar, Button, Card, Flex, Heading, Separator, Text, TextField } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <>
            <Flex justify="center" align="center" style={{ height: "100vh", backgroundColor: "#121212" }}>
                <Card style={{ width: 350, padding: "24px", textAlign: "center" }}>
                    <Heading size="5">📝 Регистрация</Heading>
                    <Text size="3" color="gray">
                        Создайте аккаунт, чтобы продолжить
                    </Text>

                    <Separator my="3" />

                    {/* Форма регистрации */}
                    <form onSubmit={handleSubmit}>
                        <Flex direction="column" gap="3">
                            {/* Имя */}
                            <TextField.Root
                                placeholder="Имя"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            >
                                <TextField.Slot>
                                    <PersonIcon />
                                </TextField.Slot>
                            </TextField.Root>
                            {errors.name && <Text size="2" color="red">{errors.name}</Text>}

                            {/* E-mail */}
                            <TextField.Root
                                placeholder="E-mail"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            >
                                <TextField.Slot>
                                    <EnvelopeClosedIcon />
                                </TextField.Slot>
                            </TextField.Root>
                            {errors.email && <Text size="2" color="red">{errors.email}</Text>}

                            {/* Пароль */}
                            <TextField.Root
                                placeholder="Пароль"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            >
                                <TextField.Slot>
                                    <LockClosedIcon />
                                </TextField.Slot>
                            </TextField.Root>
                            {errors.password && <Text size="2" color="red">{errors.password}</Text>}

                            <TextField.Root
                                placeholder="Подтвердите пароль"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            >
                                <TextField.Slot>
                                    <LockClosedIcon />
                                </TextField.Slot>
                            </TextField.Root>

                            <Button type="submit" variant="solid" disabled={processing}>
                                {processing ? 'Загрузка...' : 'Зарегистрироваться'}
                            </Button>
                        </Flex>
                    </form>

                    <Separator my="3" />

                    <Text size="2" color="gray">
                        Уже есть аккаунт? <Link href="#">Войти</Link>
                    </Text>
                </Card>
            </Flex>
        </>
    );
}
