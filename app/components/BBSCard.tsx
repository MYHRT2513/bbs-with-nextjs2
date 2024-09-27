import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Link from "next/link"
import React from 'react';
import { BBSData } from "../types/types";

interface BBSDataProps {
  bbsData: BBSData;
}

const BBSCard = ({bbsData}: BBSDataProps) => {
  const {title, content, createdAt, username} = bbsData;
  return (
    <Card>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>{username}</CardDescription>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/bbs-posts/${bbsData.id}`} className="text-blue-500">詳細を見る</Link>
            </CardFooter>
      </Card>
  )
}

export default BBSCard;
