import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <form>
        <Input
          required
          type="email"
          name="email"
          placeholder="email"
          mb={2}
          onChange={() => {
            onChange;
          }}
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg = "gray.50"
        />
        <Input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={() => {
            onChange;
          }}
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg = "gray.50"
        />
        <Button width="100%" height="36px" mb={2} mt={2} type="submit">
          Log in
        </Button>
        <Flex fontSize="9pt" justifyContent="center">
          <Text mr={1}>New here ?</Text>
          <Text color="blue.500" fontWeight="700" cursor="pointer" 
          onClick={() => setAuthModalState(prev => ({
            ...prev,
            view:'singup',
          }))}
          >SINP UP
          </Text>
        </Flex>
      </form>
    </>
  );
};
export default Login;
