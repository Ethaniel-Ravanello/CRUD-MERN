"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  department: string;
  gender: string;
  age: number;
  salary: number;
}

export default function Home() {
  const [employee, setEmployee] = useState([]);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const getEmployee = async () => {
    await axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        console.log(res.data);
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addEmployee = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/employees", {
        first_name,
        last_name,
        department,
        gender,
        age,
        salary,
      })
      .then((res) => {
        console.log(res);
        getEmployee();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEmployee = async (id: number) => {
    await axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        console.log(res);
        getEmployee();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEmployee();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center align-middle justify-between p-24">
      <div className="flex gap-x-10">
        <div className="bg-accent w-full h-full rounded-lg">
          <form onSubmit={addEmployee} className="flex flex-col gap-y-4 p-4">
            <label htmlFor="firstName" className="font-semibold text-white">
              First Name
            </label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="p-2 rounded "
            />

            <label htmlFor="lastName" className="font-semibold text-white">
              Last Name
            </label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="p-2 rounded "
            />

            <label htmlFor="department" className="font-semibold text-white">
              Department
            </label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              id="department"
              name="department"
              placeholder="Department"
              className="p-2 rounded "
            />

            <label htmlFor="gender" className="font-semibold text-white">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              id="gender"
              name="gender"
              className="p-2 rounded "
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="age" className="font-semibold text-white">
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value, 10))}
              id="age"
              name="age"
              placeholder="Age"
              className="p-2 rounded "
            />

            <label htmlFor="salary" className="font-semibold text-white">
              Salary
            </label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(parseInt(e.target.value, 10))}
              id="salary"
              name="salary"
              placeholder="Salary"
              className="p-2 rounded text-black"
            />

            <button type="submit" className="p-2 bg-button text-white rounded">
              Submit
            </button>
          </form>
        </div>

        <div className="bg-accent w-fit h-fit rounded-lg">
          <table className="min-w-full rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left text-gray-300">No</th>
                <th className="py-2 px-4 text-left text-gray-300">
                  First Name
                </th>
                <th className="py-2 px-4 text-left text-gray-300">Last Name</th>
                <th className="py-2 px-4 text-left text-gray-300">
                  Department
                </th>
                <th className="py-2 px-4 text-left text-gray-300">Gender</th>
                <th className="py-2 px-4 text-left text-gray-300">Age</th>
                <th className="py-2 px-4 text-left text-gray-300">Salary</th>
                <th className="py-2 px-4 text-left text-gray-300">Option</th>
              </tr>
            </thead>
            <tbody className="rounded-lg">
              {employee.map((data: Employee, index: number) => (
                <tr
                  className={
                    index % 2 === 0 ? "bg-table rounded-lg" : "rounded-lg"
                  }
                  key={data.id}
                >
                  <td className="py-2 text-center text-gray-300">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 text-left text-gray-300">
                    {data.first_name}
                  </td>
                  <td className="py-2 px-4 text-left text-gray-300">
                    {data.last_name}
                  </td>
                  <td className="py-2 px-4 text-left text-gray-300">
                    {data.department}
                  </td>
                  <td className="py-2 px-4 text-left text-gray-300">
                    {data.gender}
                  </td>
                  <td className="py-2 px-4 text-left text-gray-300">
                    {data.age}
                  </td>
                  <td className="py-2 px-4 text-left text-gray-300">
                    {data.salary?.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 text-left text-gray-300">
                    <div className="flex gap-x-7">
                      <Link
                        className="bg-green-800 text-white px-5 py-2 rounded-lg"
                        href={`/update/${data.id}`}
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => deleteEmployee(data.id)}
                        className="bg-red-800 text-white px-5 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
