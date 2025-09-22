"use client";

import { Github, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">石黒 隼大</h3>
                        <p className="text-gray-300">
                            公立はこだて未来大学
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium">クイックリンク</h4>
                        <div className="space-y-2">
                            <a
                                href="#skills"
                                className="block text-gray-300 hover:text-[#00BFFF] transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                スキル一覧
                            </a>
                            <a
                                href="#projects"
                                className="block text-gray-300 hover:text-[#00BFFF] transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                制作物
                            </a>
                            <a
                                href="#experience"
                                className="block text-gray-300 hover:text-[#00BFFF] transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                経験
                            </a>
                            <a
                                href="#contact"
                                className="block text-gray-300 hover:text-[#00BFFF] transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                お問い合わせ
                            </a>
                        </div>
                    </div>

                    {/* Social & Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium">連絡先</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:shunto.ishiguro.job@gmail.com"
                                className="flex items-center gap-2 text-gray-300 hover:text-[#00BFFF] transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                                shunto.ishiguro@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}