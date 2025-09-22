import { Github, ExternalLink, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './image/ImageWithFallback';

const projects = [
    {
        id: 1,
        title: '美唄ハッカソンwebアプリケーション',
        image: 'images/mammy.webp',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Vecel'],
        githubUrl: 'https://github.com/k-logic563/bibai-hackathon-team-magan',
        liveUrl: 'https://bibai-hackathon-team-magan.vercel.app/',
    },
    {
        id: 2,
        title: '旅行計画webアプリケーション',
        image: 'images/trip-plan-app.png',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel', 'Linux', 'Git', 'GitHub'],
        githubUrl: 'https://github.com/shunto-ishiguro/trip-plan-app',
        liveUrl: 'https://trip-plan-app-matu-guro.vercel.app/',
    }
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        制作物・プロジェクト
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        これまでに開発した制作物/プロジェクトです。技術力と問題解決能力をご確認いただけます。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                            <div className="aspect-video overflow-hidden rounded-t-lg">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <CardHeader>
                                <CardTitle className="text-xl text-gray-900">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="flex-1 space-y-4">
                                {/* Technologies */}
                                <div>
                                    <h4 className="font-medium text-gray-700 mb-2">使用技術</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-[#00BFFF]/10 text-[#1E90FF]">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="space-y-3">
                                <div className="flex flex-wrap gap-2 w-full">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        asChild
                                        className="flex-1 border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white"
                                    >
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2"
                                        >
                                            <Github className="h-4 w-4" />
                                            View Code
                                        </a>
                                    </Button>

                                    {project.liveUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="flex-1 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white"
                                        >
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}