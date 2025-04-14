import React from "react";

import { Heart } from "lucide-react";

function Footers() {
  const d = new Date(); // current date and time
  let year = d.getFullYear();

  return (
    <div className="py-8 px-4 border-t border-slate-400  bg-stone-900">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-slate-500 flex items-center justify-center">
          <span>Design & Built with</span>
          <Heart  size={16} className="mx-1 text-pink-500" />
          <span>Anurag Verma</span>
        </p>
        <p className='text-sm text-slate-500 mt-2'>@ {year} All Rights Reserved </p>
      </div>
    </div>
  );
}

export default Footers;
