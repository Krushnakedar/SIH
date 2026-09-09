import { Link } from 'wouter';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e3f3f0] text-[#20777b]"><Compass size={26} /></div>
      <h1 className="mt-5 text-2xl font-bold text-[#285b61]">Chart not found</h1>
      <p className="mt-2 text-sm text-[#78908f]">This coordinate does not exist in the current demo.</p>
      <Link href="/dashboard" className="mt-5 rounded-xl bg-[#126972] px-4 py-2.5 text-xs font-bold text-white" data-testid="link-return-dashboard">Return to overview</Link>
    </div>
  );
}