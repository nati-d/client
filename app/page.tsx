"use client"
import Link from 'next/link';
import { Button } from '@mantine/core';

const HomePage = () => {
  return (
    <Button component={Link} href="/hello">
      Next link button
    </Button>
  )
}

export default HomePage