import { useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Header>
        <div>asd</div>
      </Header>
      <div className="container mx-auto flex h-full flex-1 flex-col items-center justify-center pb-5">
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button onClick={() => setCount((count) => count + 1)} className="btn btn-primary">
                Get Started {count}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
