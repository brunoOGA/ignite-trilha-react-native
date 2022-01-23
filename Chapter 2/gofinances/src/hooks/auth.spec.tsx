import "jest-fetch-mock";

import { renderHook, act } from "@testing-library/react-hooks";
import { AuthProvider, useAuth } from "./auth";
import fetchMock from "jest-fetch-mock";
import { mocked } from "jest-mock";
import { startAsync } from "expo-auth-session";
import { waitFor } from "@testing-library/react-native";

jest.mock("expo-auth-session");

fetchMock.enableMocks();

describe("Auth Hook", () => {
  it("should be able to sign in with Google account existing", async () => {
    const googleMocked = mocked(startAsync as any);

    googleMocked.mockReturnValueOnce({
      type: "success",
      params: {
        access_token: "any_token",
      },
    });

    fetchMock.mockResponseOnce(
      JSON.stringify({
        id: "any_id",
        email: "any_email",
        name: "any_name",
        photo: "any_photo.png",
      })
    );

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(async () => await result.current.signInWithGoogle());

    expect(result.current.user.email).toBe("any_email");
  });

  it("user should not connect if cancel authentication with Google", async () => {
    const googleMocked = mocked(startAsync as any);

    googleMocked.mockReturnValueOnce({
      type: "cancel",
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(async () => await result.current.signInWithGoogle());

    expect(result.current.user).not.toHaveProperty("id");
  });
  it("user should be error with incorrectly Google parameters ", async () => {
    const googleMocked = mocked(startAsync as any);

    googleMocked.mockImplementation(() => {
      throw new Error();
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    waitFor(async () => {
      try {
        await act(async () => await result.current.signInWithGoogle());
      } catch {
        expect(result.current.user).toEqual({});
      }
    });
  });
});
