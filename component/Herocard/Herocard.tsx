"use client";
import { Card } from "flowbite-react";
import Link from "next/link";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export function HeroCardComp() {
  return (
    <Card
      className="max-w-sm bg-transparent backdrop-blur-lg bg-opacity-30 flex flex-col items-center justify-center h-full py-8"
    >
      <h5 className="text-2xl font-bold tracking-tight text-white text-center">
      Start planning your trip
      today!
      </h5>
      <p className="font-normal text-white text-center mb-6">
        Discover the best places to visit, get personalized recommendations on
        days, activities, and the best time to visit. 
      </p>
      <div className="w-full flex justify-center">
        <Link href="/" passHref>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Plan Now
          </Button>
        </Link>
      </div>
    </Card>
  );
}
