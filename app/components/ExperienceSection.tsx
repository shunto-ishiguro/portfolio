import { Calendar, MapPin, ExternalLink, Github, Trophy, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const experiences = [
    {
        type: 'development1',
        title: '美唄ハッカソン参加',
        company: '',
        period: '2025年2月',
        location: '美唄市',
        description: '4名のチームで"美唄市のゴルフ場"をテーマにしたWebアプリケーション開発',
        achievements: [
            'フロントエンド',
            'HTML CSS JavaScriptを用いた開発からデプロイまで経験'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Vecel'],
        githubUrl: 'https://github.com/k-logic563/bibai-hackathon-team-magan'
    },
    {
        type: 'development2',
        title: 'スマホミニゲーム開発',
        company: '',
        period: '2025年1月 - 2025年3月',
        location: 'リモート',
        description: '友人2人と3人でUnityを使ったスマホミニゲーム開発',
        achievements: [
            'フロントエンド/バックエンド',
            'Unityを用いた開発経験',
        ],
        technologies: ['C#', 'Unity', 'Git', 'GitHub', 'blender'],
        githubUrl: 'https://github.com/mahiro-1/poo_bomb'
    },
    {
        type: 'development3',
        title: '旅行計画アプリケーション開発',
        company: '',
        period: '2025年8月 - 2025年9月',
        location: 'リモート',
        description: 'モダンなWeb技術を学習しながら、友人1人と2人でwebアプリケーションを開発',
        achievements: [
            'フロントエンド/バックエンド',
            'Next.js、React、TypeScript、Supabase を用いた開発からデプロイまで経験',
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel', 'Linux', 'Git', 'GitHub'],
        githubUrl: 'https://github.com/shunto-ishiguro/trip-plan-app'
    }
];

const competitions = [
    {
        name: 'AtCoder',
        rank: '茶色（531点）',
        description: '競技プログラミングを通じてアルゴリズム・データ構造の理解を深めております',
        profileUrl: 'https://atcoder.jp/users/Shunto09'
    },
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        経験・実績
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        チーム開発、個人開発、競技プログラミングを通じて蓄積した経験です。
                    </p>
                </div>

                {/* Work Experience */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                        <Code className="h-6 w-6 text-[#00BFFF] mr-2" />
                        開発経験
                    </h3>
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div>
                                            <CardTitle className="text-xl text-gray-900">
                                                {exp.title}
                                            </CardTitle>
                                            <p className="text-[#1E90FF] font-medium">{exp.company}</p>
                                        </div>
                                        <div className="flex flex-col sm:items-end text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1 mt-1">
                                                <MapPin className="h-4 w-4" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-gray-600">{exp.description}</p>

                                    <div>
                                        <h4 className="font-medium text-gray-700 mb-2">主な成果・担当業務</h4>
                                        <ul className="space-y-1">
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-600">
                                                    <span className="text-[#00BFFF] mr-2 mt-1">•</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-[#00BFFF]/10 text-[#1E90FF]">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    {exp.githubUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white"
                                        >
                                            <a
                                                href={exp.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <Github className="h-4 w-4" />
                                                GitHub を見る
                                            </a>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Competitions & Achievements */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                        <Trophy className="h-6 w-6 text-[#00BFFF] mr-2" />
                        競技プログラミング
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {competitions.map((comp, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg text-gray-900 flex items-center justify-between">
                                        {comp.name}
                                        <Badge className="bg-[#00BFFF] hover:bg-[#1E90FF]">
                                            {comp.rank}
                                        </Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-gray-600 text-sm">{comp.description}</p>
                                    <div className="flex gap-2">
                                        {comp.profileUrl && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                                className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white"
                                            >
                                                <a
                                                    href={comp.profileUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    プロフィール
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}