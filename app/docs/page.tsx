export default function DocsPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-16">
            <h1 className="text-2xl font-bold mb-6">Android 应用使用入门</h1>
            <ol className="list-decimal pl-5 space-y-4 text-sm">
                <li>设备兼容与准备：确保设备支持 eSIM/LPA 功能，系统版本满足要求。</li>
                <li>扫码下载配置文件：打开应用，扫描提供的二维码，下载 eSIM 配置文件。</li>
                <li>激活与网络测试：完成激活后，进行网络连通性测试与速度测试。</li>
                <li>常见问题与排障：参考知识库，或通过工单联系支持。</li>
                <li>隐私提示：仅收集必要数据以完成服务，详情见隐私政策。</li>
            </ol>
        </main>
    );
}

