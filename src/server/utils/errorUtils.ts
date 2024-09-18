import { TRPCError } from "@trpc/server";

export function getError(error: unknown)
{
  console.log(error);

  if (error instanceof Error)
  {
    return getString(error.message);
  }

  if (error instanceof TRPCError)
  {
    return getString(error.code);
  }

  return errors.INTERNAL_SERVER_ERROR;
}

export function getErrorMessage(error: unknown)
{
  if (error instanceof Error)
  {
    return error.message as ERROR;
  }

  return ERROR.INTERNAL_SERVER_ERROR;
}


function getString(value: string)
{
  if (Object.keys(errors).includes(value))
  {
    return errors[value as ERROR];
  }
  return errors.INTERNAL_SERVER_ERROR;
}

const errors = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  BAD_REQUEST: "BAD_REQUEST",
  FORBIDDEN: "FORBIDDEN",
  UNAUTHORIZED: "UNAUTHORIZED",
}

export enum ERROR
{
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  BAD_REQUEST = "BAD_REQUEST",
  FORBIDDEN = "FORBIDDEN",
  UNAUTHORIZED = "UNAUTHORIZED",
}