/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const page = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const getEmployeeById = async () => {
    await axios
      .get("http://localhost:5000/employees")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editEmployee = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/employees/", {
        first_name,
        last_name,
        department,
        gender,
        age,
        salary,
      })
      .then((res) => {
        console.log(res);
        getEmployeeById();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="flex min-h-screen flex-col items-center align-middle justify-between p-24">
      <div className="bg-accent w-full h-full rounded-lg">
        <form onSubmit={editEmployee} className="flex flex-col gap-y-4 p-4">
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
            Update
          </button>
        </form>
      </div>
    </main>
  );
};

export default page;
