"use client"

import { useEffect } from "react";
import Form from "../components/form/Form";
import Table from "../components/table/Table";
import { User } from "@/types/user";
import useUsers from "@/hooks/useGetUsers";

export default function Home() {
  const {users, getUsers, setUsers} = useUsers()

  function handleAddUser(newUser: User) {
    setUsers(prevUsers => [...prevUsers, newUser]);
  }

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <div className="flex justify-center gap-4 pt-30  min-h-screen  bg-gray-100">
      <Form  onAddUser={handleAddUser}/>
      <Table users={users}/>
    </div>
  );
}
