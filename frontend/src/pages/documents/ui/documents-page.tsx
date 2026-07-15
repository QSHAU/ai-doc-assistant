import { useUser } from "@/entities/user";

export const DocumentsPage = () => {
  const { user, setUser } = useUser();

  const handleClick = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <>
      <span>Привет {user?.name || user?.email}</span>
      <button onClick={handleClick}>Выйти</button>
    </>
  );
};
