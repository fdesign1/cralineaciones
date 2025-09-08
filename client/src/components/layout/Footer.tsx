
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Shop Details */}
          <div>
            <h3 className="font-bold text-lg mb-4">MultiCar Service</h3>
            <p className="text-sm text-muted-foreground">
              123 Automotive Lane<br />
              Car City, ST 12345
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Phone: (123) 456-7890
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Email: contact@multicar.com
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Column 2: Schedule */}
          <div>
            <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Column 3: Map */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Location</h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Map Placeholder</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MultiCar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
