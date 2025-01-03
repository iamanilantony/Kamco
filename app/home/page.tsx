// app/home/page.tsx
import { redirect } from 'next/navigation';

export default function HomeRedirect() {
    redirect('/');
    return null; // This won't render since the redirect happens immediately.
}
