// src/pages/Family.jsx
import React from 'react';
import FamilyHero from "../../components/family/FamilyHero";
import FamilyNavbar from '../../components/family/FamilyNavbar';


export default function Family() {
  return (
    <>
      <FamilyNavbar />
      <FamilyHero />
      <div className="text-center mt-10">
        <a
          href="/family/DaftFamApp"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          🚀 Enter the Family App
        </a>
      </div>

      <main className="bg-white">


        {/* Feature grid */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Manage your family finances effortlessly
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our platform offers tools to help your family budget, save, and grow together.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* Icon */}
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 14a5 5 0 00-5 5h10a5 5 0 00-5-5z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Family Budgeting</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Create and track budgets for your entire family with ease.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* Icon */}
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-6 4h12a2 2 0 002-2v-5a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0012.586 7H9a2 2 0 00-2 2v7a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Savings Goals</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Set and monitor savings goals for each family member.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* Icon */}
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1l2 7h12l2-7h1" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 6a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Spending Insights</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Get detailed reports on your family’s spending habits.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">How It Works</h2>
            <ol className="mt-8 max-w-3xl mx-auto space-y-6 text-gray-700 list-decimal list-inside text-lg">
              <li>Create a family account and invite members.</li>
              <li>Set budgets and savings goals for each member.</li>
              <li>Track expenses and get spending insights.</li>
              <li>Collaborate and achieve your financial goals together.</li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}