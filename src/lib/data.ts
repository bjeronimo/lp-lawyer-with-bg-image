import {cache} from "react";
import fs from "fs";
import path from "path";

import {LandingPageData} from "@/types/app";

export const getLandingPageData = cache(
  async () => {
    let data: LandingPageData;

    if (typeof window === 'undefined') {
      const json = fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'landing.json'), 'utf8');
      data = JSON.parse(json) as LandingPageData;
    } else {
      const res = await fetch('/data.json');
      data = await res.json();
    }

    return data;
  }
)
