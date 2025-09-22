import { Mail, Github, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        お問い合わせ
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        ご質問やお仕事のご相談がございましたら、お気軽にご連絡ください。<br />
                        24時間以内にお返事いたします。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Direct Contact */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                                <Mail className="h-5 w-5 text-[#00BFFF]" />
                                直接連絡
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-gray-600">
                                お仕事や技術的なご質問など、お気軽にメールでご連絡ください。
                            </p>
                            <Button
                                size="lg"
                                asChild
                                className="w-full bg-[#00BFFF] hover:bg-[#1E90FF] text-white"
                            >
                                <a
                                    href="mailto:shunto.ishiguro.job@gmail.com"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <Mail className="h-5 w-5" />
                                    メールを送る
                                </a>
                            </Button>
                            <p className="text-sm text-gray-500 text-center">
                                shunto.ishiguro.job@gmail.com
                            </p>
                        </CardContent>
                    </Card>

                    {/* Social Media */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                                <MessageCircle className="h-5 w-5 text-[#1E90FF]" />
                                ソーシャルメディア
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-gray-600">
                                技術記事やプロジェクトの最新情報については、こちらからご確認いただけます。
                            </p>
                            <div className="space-y-3">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    asChild
                                    className="w-full border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                                >
                                    <a
                                        href="https://github.com/shunto-ishiguro"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <Github className="h-5 w-5" />
                                        GitHub
                                    </a>
                                </Button>
                                <div className="grid grid-cols-2 gap-3">
                                    <Button
                                        variant="outline"
                                        asChild
                                        className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                                    >
                                        <a
                                            href="https://zenn.dev"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Zenn
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        asChild
                                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                                    >
                                        <a
                                            href="https://qiita.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Qiita
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}