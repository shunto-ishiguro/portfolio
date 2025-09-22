import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './image/ImageWithFallback';

export function HeroSection() {
    return (
        <section id="top" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    {/* Profile Image */}
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#00BFFF] to-[#1E90FF] p-1">
                            <ImageWithFallback
                                src="/images/my-aicon.png"
                                alt="プロフィールアイコン"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Name and Title */}
                    <div className="mb-10 space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            石黒 隼大
                        </h1>
                        <p className="text-xl sm:text-2xl text-[#1E90FF] mb-6">
                            体力と継続力が武器の学生エンジニア
                        </p>
                    </div>

                    {/* Profile Description */}
                    <div className="mb-12 max-w-3xl mx-auto">
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            公立はこだて未来大学 システム情報科学部 情報アーキテクチャ学科に所属する学部2年生です。<br />
                            技術を学んで成長していくことが楽しく、フロントエンドからバックエンドまで、モダンな開発手法や最新技術に積極的に触れながら学んでいます。
                            現在は、TypeScript、ReactやNext.jsを用いたWebアプリケーション開発をメインに取り組み、長時間のコーディングや複雑な課題にも体力と継続力を活かして粘り強く取り組むことができます。
                            アプリ開発では、UI/UXデザインやデータ可視化を意識したユーザー中心のプロダクトを制作しており、常に「使いやすく、価値のあるもの」を作ることを心がけています。
                            また、アルゴリズムや設計の考え方にも興味があり、効率的で拡張性の高いコードを書くことを目標に、日々学習を続けています。
                            学びながら成果を出すことを大切にしており、チーム開発や個人制作のどちらでも主体的に動くことを意識しています。
                        </p>
                        <p className="text-base text-gray-500">
                            このサイトでは、私のスキル、制作物、経験をまとめています。<br />
                            採用担当者の皆様に私の技術力と成長意欲をお伝えできれば幸いです。
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white"
                        >
                            <a
                                href="https://github.com/shunto-ishiguro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Github className="h-5 w-5" />
                                GitHub を見る
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}