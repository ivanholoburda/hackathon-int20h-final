import React, { useState } from 'react';
import { Avatar, Button, Card, Flex, Heading, Separator, Text, TextField } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Link, useForm } from "@inertiajs/react";


export default function Index() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <>
            <Flex justify="center" align="center" style={{ height: "100vh", backgroundColor: "#121212" }}>
                <Card style={{ width: 350, padding: "24px", textAlign: "center" }}>
                    <Heading size="5">🔑 Вход</Heading>
                    <Text size="3" color="gray">
                        Введите свои данные, чтобы продолжить
                    </Text>

                    <Separator my="3" />

                    {/* Форма входа */}
                    <form onSubmit={handleSubmit}>
                        <Flex direction="column" gap="3">
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

                            <TextField.Root
                                placeholder="Password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            >
                                <TextField.Slot>
                                    <LockClosedIcon />
                                </TextField.Slot>
                            </TextField.Root>
                            {errors.password && <Text size="2" color="red">{errors.password}</Text>}

                            <Button type="submit" variant="solid" disabled={processing}>
                                {processing ? 'Загрузка...' : 'Войти'}
                            </Button>
                        </Flex>
                    </form>

                    <Separator my="3" />

                    <Text size="2" color="gray">
                        Нет аккаунта? <Link href="#">Зарегистрироваться</Link>
                    </Text>
                </Card>
            </Flex>
        </>
    );
}
