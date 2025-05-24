"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

const [menuOpen, setMenuOpen] = useState(false);

export function MenuToggle() {
    return (
        <button onClick={() => setMenuOpen(!menuOpen)} className="pl-2 border-l-[2px] border-secondary">
            <AlignRight />
        </button>

    )
}

export function Menu() {
    return (
        <AnimatePresence>
            <motion.div>
                <Sidebar />
            </motion.div>
        </AnimatePresence>
    )
}