import useHass from "@hooks/useHass";
export default function useHassUser() {
  const { user } = useHass();
  return user;
}
