import React, { useState } from "react";
import { useForm } from "@mantine/hooks";
import { EnvelopeClosedIcon, LockClosedIcon } from "@modulz/radix-icons";
import {
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Paper,
  Text,
  LoadingOverlay,
  useMantineTheme,
  Anchor,
} from "@mantine/core";
import { Divider } from '@mantine/core';
import { DatePicker } from "@mantine/dates";

export default function Login() {
  const [error, setError] = useState(null);
  const theme = useMantineTheme();
  const inputVariant = theme.colorScheme === "dark" ? "filled" : "default";
  //   const form = useForm({
  //     initialValues: {
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       password: "",
  //       termsOfService: true,
  //     },
  //     validationRules: {
  //       firstName: (value) => formType === "login" || value.trim().length >= 2,
  //       lastName: (value) => formType === "login" || value.trim().length >= 2,
  //       email: (value) => /^\S+@\S+$/.test(value),
  //       password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
  //     },
  //   });
  return (
    <div
      className="flex w-full h-full justify-center items-center"
      style={{
        background:
          "url(https://cdnb.artstation.com/p/users/covers/000/024/263/default/10a4859bf31d7dd588099746830ea180.jpg?1637668248) no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="flex w-4/12 h-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-200 rounded-lg shadow-lg p-8">
      <form
        className="mr-8"
        //   onSubmit={form.onSubmit(handleSubmit)}
      >
        <LoadingOverlay
        // visible={form.isSubmitting}
        />
        <Text size="xl" weight={700} transform="uppercase">
          Login
        </Text>
        <TextInput
          required
          placeholder="Your email"
          label="Email"
          // {...form.getInputProps("lastName")}
        />
        <PasswordInput
          required
          placeholder="Your password"
          label="Password"
          // {...form.getInputProps("lastName")}
        />
        <Group position="apart" mt="sm">
          <Checkbox
            mt="sm"
            label="Remember me"
            // {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />
          <Anchor
            mt="sm"
            href="https://www.mantine.com/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forgot your password?
          </Anchor>
        </Group>
        <Button color="blue" type="submit" className="mt-3" fullWidth={true}>
          Register
        </Button>
        <Group position="apart" mt="sm">
          <Anchor
            component="button"
            type="button"
            // onClick={toggleFormType}
            size="md"
          >
            Need an account? Register
          </Anchor>
        </Group>
      </form>
      <Divider orientation="vertical"/>
      <div>
        QR
      </div>
      </div>
    </div>
  );
}
