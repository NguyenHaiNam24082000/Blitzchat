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
  Anchor,
  useMantineTheme,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const theme = useMantineTheme();
  return (
    <div
      className="flex w-full h-full justify-center items-center"
      style={{
        background:
          "url(https://cdnb.artstation.com/p/users/covers/000/024/263/default/10a4859bf31d7dd588099746830ea180.jpg?1637668248) no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <form
        className="w-4/12 h-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-200 rounded-lg shadow-lg p-8"
        //   onSubmit={form.onSubmit(handleSubmit)}
      >
        <LoadingOverlay
        // visible={form.isSubmitting}
        />
        <Text size="xl" weight={700} transform="uppercase">
          Register
        </Text>
        <Group grow>
          <TextInput
            data-autofocus
            required
            placeholder="Your first name"
            label="First name"
            // {...form.getInputProps("firstName")}
          />

          <TextInput
            required
            placeholder="Your last name"
            label="Last name"
            // {...form.getInputProps("lastName")}
          />
        </Group>
        <TextInput
          required
          placeholder="Your email"
          label="Email"
          // {...form.getInputProps("lastName")}
        />
        <TextInput
          required
          placeholder="Your username"
          label="Username"
          // {...form.getInputProps("lastName")}
        />
        <DatePicker placeholder="Pick date" label="Event date" required />
        <PasswordInput
          required
          placeholder="Your password"
          label="Password"
          // {...form.getInputProps("lastName")}
        />
        <PasswordInput
          required
          placeholder="Confirm your password"
          label="Confirm password"
          // {...form.getInputProps("lastName")}
        />
        <Checkbox
          mt="sm"
          label="I agree to Discord's Terms of Service and Privacy Policy"
          // {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
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
            Have an account? Login
          </Anchor>
        </Group>
      </form>
    </div>
  );
}
