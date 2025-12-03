"use client";

import { useEffect } from 'react';
import TAOS from 'taos'; // <--- No red squiggly line anymore!

export default function TaosInit() {
  useEffect(() => {
    TAOS.init();
  }, []);

  return null;
}