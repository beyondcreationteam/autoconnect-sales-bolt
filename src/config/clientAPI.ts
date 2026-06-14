import axios from "axios";

export class ClientApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ClientApiError";
    this.status = status;
  }
}

function handleError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    throw new ClientApiError(error.message, error.response?.status ?? 500);
  }
  throw new ClientApiError(String(error), 500);
}

export async function generalPostRequest<T>(requestFn: () => Promise<T>): Promise<T> {
  try {
    return await requestFn();
  } catch (error) {
    return handleError(error);
  }
}
