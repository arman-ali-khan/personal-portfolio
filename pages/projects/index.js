import Layout from '@/Layout/Layout';
import AllProjects from '@/components/Projects/AllProjects';

const index = () => {
    return (
        <Layout className="container mx-auto" title={'Projects'}>
            <AllProjects />
        </Layout>
    );
};

export default index;