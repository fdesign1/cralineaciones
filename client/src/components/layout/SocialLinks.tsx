
import * as React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <a href="https://instagram.com/cralineaciones" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Button>
      </a>
    </div>
  );
}
