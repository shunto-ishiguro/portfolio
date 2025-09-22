import { Progress } from './ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const skillCategories = [
    {
        category: 'Frontend',
        skills: [
            { name: 'TypeScript', level: 85 },
            { name: 'React', level: 70 },
            { name: 'Tailwind CSS', level: 60 },
            { name: 'Next.js', level: 70 },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', level: 40 },
            { name: 'Supabase', level: 50 },
            { name: 'PostgreSQL', level: 20 },
            { name: 'Java', level: 80 },
            { name: 'Python', level: 50 },
            { name: 'C#', level: 50 },
        ],
    },
    {
        category: 'Tools & Technologies',
        skills: [
            { name: 'Git', level: 80 },
            { name: 'GitHub', level: 80 },
            { name: 'GitHub Actions', level: 80 },
            { name: 'Docker', level: 70 },
            { name: 'Vercel', level: 70 },
            { name: 'Linux', level: 70 },
            { name: 'Unity', level: 50 },
        ],
    },
    {
        category: 'Concepts',
        skills: [
            { name: 'Data Structures', level: 60 },
            { name: 'Algorithms', level: 60 },
        ],
    },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        スキル一覧
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        これまでに学習・実践してきた技術スタックです。習熟度を%で表現しています。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {skillCategories.map((category) => (
                        <Card key={category.category} className="h-fit">
                            <CardHeader>
                                <CardTitle className="text-xl text-[#1E90FF] border-b border-gray-200 pb-2">
                                    {category.category}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-gray-700">{skill.name}</span>
                                            <Badge variant="secondary" className="bg-[#00BFFF]/10 text-[#1E90FF]">
                                                {skill.level}%
                                            </Badge>
                                        </div>
                                        <Progress
                                            value={skill.level}
                                            className="h-2"
                                            style={{
                                                '--progress-background': '#00BFFF',
                                            } as React.CSSProperties}
                                        />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}