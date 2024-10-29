import Footer from "./components/Footer";
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";

function App() {
  return (
    <div className=" w-full h-screen relative isolate bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg')] bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:inset-0  after:bg-black after:z-[-1] after:opacity-40 text-white ">
      <div className="container h-full mx-auto">
        <Header />
        <main>
          <SignInForm />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
