import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center py-4 ">
      <Head>
        <title>Joseph Carruth</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="text-left sm:w-11/12 md:w-10/12 lg:w-5/12">
        <div className="grid sm:grid-cols-4 lg:grid-cols-5">
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="text-4xl font-light">Joseph Carruth</h1>
            <h2 className="py-2 text-lg font-light text-gray-500">
              Mechanical Engineer and Finance Graduate
            </h2>
            <div className="leading-sm inline-flex items-center rounded-full border bg-sky-200 px-3 py-1 text-xs uppercase text-sky-700">
              Financial Modeling
            </div>
            <div className="leading-sm inline-flex items-center rounded-full border bg-green-200 px-3 py-1 text-xs  uppercase text-green-700">
              Mechanical Design
            </div>
            <div className="leading-sm inline-flex items-center rounded-full border bg-violet-200 px-3 py-1 text-xs uppercase text-violet-700">
              Data Science 
            </div>
            <p className="py-2 text-justify font-light text-gray-600">
              Recent Graduate of {' '}
              <a href="https://www.lehigh.edu/" className="text-sky-700">
                {' '}
                Lehigh University
              </a>
               My undergraduate scope as a Mechanical Engineering Major and Finance
              major provided me the ability to explore a wide range of topics, industries, 
              and intellectual endeavors. I was able to pursue and obtain minors in both Aerospace Engineering
              and Economics, highlighting a strong interest in the intersection of technology and business. 
      
              Alongside my academic pursuits, I was a walk-on member of the Lehigh University rowing team, where I 
              competed in the 1st Varsity 8+ boat for all 4 years, receiving numerous personal and team accolades as
              I gained invaluable experience in teamwork, leadership, and relentless dedication. I also served as the 
              Vice President of the Engineering Honors Society, Tau Beta Pi, the oldest and original chapter of the 
              Engineering Honor Society in the United States.  
            </p>
            <p className="text-justify font-light text-gray-600">
              In my final semester, I took a course with Dr.{' '}
              <a
                className="text-sky-700"
                href="http://bowen.finance/"
              >
                Donald Bowen
              </a>{' '}
              , titled Advanced Data Science for Investments.
              My work consisted of creating various event studies, including home price predictors, a natural language processor 
              to forecast returns from 10-K filings, and a Neural Network to predict asset returns. 

              In that same span, I modeled a business jet for former NASA Astronaut Terry Hart's course, Aircraft Design. The aircraft 
              was designed following rigorous aerodynamic analysis, and utilizing OpenVSP software I was able to model and test the aircraft.
            </p>
            <div className="container flex justify-between py-4">
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/google-scholar--v3.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://scholar.google.com/citations?user=iGRSrJUAAAAJ&hl=en&inst=1960582506653781529&oi=ao"
                  >
                    Scholar
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/github.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/josephcarruth"
                  >
                    @josephcarruth
                  </a>
                </span>
              </div>
        
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://www.linkedin.com/in/joseph-carruth/"
                  >
                    @joseph-carruth
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="PDF/Joseph Carruth - Professional Resume.pdf"
                  >
                    Resume.pdf
                  </a>
                </span>
              </div>
            </div>
            <hr />
          </div>

          {/* Education Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Education</h1>
          </div>

          {/* B.S. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2021 - May 2025</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">B.S. in Mechanical Engineering</h3>
            <h4 className="text-base font-light">
              Lehigh University, Bethlehem, Pennsylvania{' '}
            </h4>
          </div>

          {/* B.S. */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Aug. 2021 - May 2025</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">B.S. in Integrated Business and Engineering Honors - Finance</h3>
            <h4 className="text-base font-light">
              Lehigh University, Bethlehem, Pennsylvania{' '}
            </h4>
          </div>

          {/* Experience Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Experience</h1>
          </div>

          {/* Intern */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">May 2024 - July 2024</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base ">
              Middle Market Intern
            </h3>
            <h4 className="text-base font-light">
              Texas Capital Bank, Dallas, Texas{' '}
            </h4>
            <p className="text-justify text-sm font-light text-gray-500">
              Worked with the Middle Market team to analyze and underwrite
              commercial loans for small to mid-sized businesses. Assisted in
              the preparation of credit memos, financial analysis, and risk
              assessments. Collaborated with senior bankers to develop client
              relationships and support business development efforts.
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://texascapital.com/"
                >
                  Texas Capital
                </a>
              </span>
            </div>
          </div>

          
          {/* Research Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Research</h1>
          </div>

          {/* Team Project */}
          <div></div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">
              Fitting Neural Networks of Increasing Complexity to Predict Asset Returns: Portfolio Analysis
            </h3>
            <p className="text-sm font-light text-gray-400">
              Joseph Carruth, Jay Geneve, Michael Jamesley, and Evan Trock
            </p>
            <h4 className="text-base text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2021{' '}
            </h4>
            <div className="container flex py-2">
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="/PDF/FairRankVis.pdf"
                  >
                    PDF
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/youtube-play.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://youtu.be/WVJ3-UXNxPk"
                  >
                    Video
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/small/96/000000/presentation.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://youtu.be/-pk4VaxJt7I"
                  >
                    Talk
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color-glass/48/000000/code.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/VADERASU/fairrankvis"
                  >
                    Code
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Auditing */}
          <div></div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">
              Auditing the Sensitivity of Graph-based Ranking with Visual
              Analytics
            </h3>
            <p className="text-sm font-light text-gray-400">
              Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and Ross
              Maciejewski
            </p>
            <h4 className="text-base text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2020{' '}
            </h4>
            <div className="container flex py-2">
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="http://vader.lab.asu.edu/docs/publications/pdf/2021/graph-sensitivity.pdf"
                  >
                    PDF
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/youtube-play.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://www.youtube.com/watch?v=_ifuWHgUyCg"
                  >
                    Video
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/small/96/000000/presentation.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://youtu.be/BtxxhKdO6Ms?t=2285"
                  >
                    Talk
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color-glass/48/000000/code.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/VADERASU/auditing-sensitivity-graph-ranking"
                  >
                    Code
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* AML */}
          <div></div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base">
              Explaining Vulnerabilities to Adversarial Machine Learning through
              Visual Analytics
            </h3>
            <p className="text-sm font-light text-gray-400">
              Yuxin Ma, Tiankai Xie, Jundong Li, and Ross Maciejewski
            </p>
            <h4 className="text-base text-sm font-light italic">
              IEEE Transactions on Visualization and Computer Graphics, 2019{' '}
            </h4>
            <div className="container flex py-2">
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="http://vader.lab.asu.edu/docs/publications/pdf/2019/adva.pdf"
                  >
                    PDF
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/youtube-play.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://www.youtube.com/watch?v=eMyhe7WcOXc"
                  >
                    Video
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/small/96/000000/presentation.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://vimeo.com/369214358"
                  >
                    Talk
                  </a>
                </span>
              </div>
              <div className="pr-8">
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color-glass/48/000000/code.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/VADERASU/visual-analytics-adversarial-attacks"
                  >
                    Code
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Reference Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Reference</h1>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Donald Bowen,{' '}
              <span className="font-light">Associate Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              
            </p>
            <p className="font-light italic text-gray-500">
              Lehigh University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://bowen.finance/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>

          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Terry Hart, <span className="font-light">Professor</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              P.C. Rossin College of Engineering and Applied Science
            </p>
            <p className="font-light italic text-gray-500">
              Lehigh University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="http://www.public.asu.edu/~huanliu/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>


          <div></div>
          <div className="col-span-4 px-4">
            <p>
              Dr. Greg Reihman,{' '}
              <span className="font-light">Professor of Philosophy, Vice Provost</span>
            </p>
            <p className="text-sm font-light text-gray-500">
              The School of Computing and Augmented Intelligence (SCAI)
            </p>
            <p className="font-light italic text-gray-500">
              Lehigh University
            </p>
            <div className="py-2">
              <img
                className="inline w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
              />
              <span className="pl-1">
                <a
                  className="text-sm font-light text-sky-700"
                  href="https://chrisbryan.github.io/"
                >
                  Homepage
                </a>
              </span>
            </div>
          </div>


          <div></div>
          {/* End */}
      </main>
    </div>
  )
}

export default Home
