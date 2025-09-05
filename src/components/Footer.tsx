import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border text-center py-10">
      <Image
        src="/global.svg"   
        alt="Logo"
        width={48}      
        height={48}       
        className="mx-auto h-12 w-auto mb-4"
        priority
      />

      <div className="flex justify-center space-x-4 mb-4 text-muted-foreground">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <p className="text-sm text-gray-400">
        © 2025 Canadian Choice Award. All rights reserved.
      </p>
    </footer>
  );
}
