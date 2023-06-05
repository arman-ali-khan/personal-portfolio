import Layout from '@/Layout/Layout';
import SingleProject from './SingleProject';

const AllProjects = () => {
    return (
        <Layout>
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Portfolio</h1>

        <div className="mt-8 xl:mt-16 lg:flex ">
            <div className="lg:mx-12">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

                <div className="mt-4 space-y-4 lg:mt-8">
                    <a href="#" className="block text-blue-500 dark:text-blue-400 hover:underline">Web design</a>
                    <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">App design</a>
                    <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Branding</a>
                    <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Animation</a>
                </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                 {
                  [1,1,1,11].map((items,i)=><SingleProject items={items} key={i} />)
                  }
                </div>
            </div>
        </div>
    </div>
</section>
        </Layout>
    );
};

export default AllProjects;