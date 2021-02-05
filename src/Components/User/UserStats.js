import React from 'react';
import Head from '../Head/Head';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../Services/api';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();

      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title="Estatísticas" description="Estatísticas do seu perfil" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
