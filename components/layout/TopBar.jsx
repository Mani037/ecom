"use client";

import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { Add, Logout, Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TopBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <div className="flex  items-center mt-6 justify-between ">
      <div className="relative">
        <input
          type="text"
          className="search-bar "
          placeholder="Search Post,people,..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" />
      </div>
      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>

      <div className="flex items-center ">
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer md:hidden items-center py-6">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
            </div>
          </SignOutButton>
        </SignedIn>

        <Link href={"/"}>
          <Image
            src={"/assets/cool.jpg"}
            alt="profile pic"
            width={50}
            height={50}
            className="rounded-full md:hidden"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
