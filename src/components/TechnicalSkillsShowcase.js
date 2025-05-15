'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function TechnicalSkillsShowcase() {
  const [showFullSQL, setShowFullSQL] = useState(false);
  const [showAppSimulation, setShowAppSimulation] = useState(false);
  const [appToSimulate, setAppToSimulate] = useState('');
  const { t } = useTranslation();
  const sqlShortRef = useRef(null);
  const sqlFullRef = useRef(null);
  const showMoreBtnRef = useRef(null);
  const showLessBtnRef = useRef(null);
  
  // Usando useEffect para configurar manipuladores de eventos diretamente no DOM
  useEffect(() => {
    // Configurando o botão "Mostrar mais"
    if (showMoreBtnRef.current) {
      console.log('Botão "Mostrar mais" encontrado, configurando evento');
      showMoreBtnRef.current.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Botão "Mostrar mais" clicado');
        setShowFullSQL(true);
      });
    }

    // Configurando o botão "Mostrar menos"
    if (showLessBtnRef.current) {
      console.log('Botão "Mostrar menos" encontrado, configurando evento');
      showLessBtnRef.current.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Botão "Mostrar menos" clicado');
        setShowFullSQL(false);
      });
    }

    // Atualizando a visibilidade dos elementos SQL baseado no estado
    if (sqlShortRef.current && sqlFullRef.current) {
      if (showFullSQL) {
        sqlShortRef.current.style.display = 'none';
        sqlFullRef.current.style.display = 'block';
      } else {
        sqlShortRef.current.style.display = 'block';
        sqlFullRef.current.style.display = 'none';
      }
    }
  }, [showFullSQL]);
  
  // Fechar a simulação após um tempo
  useEffect(() => {
    if (showAppSimulation) {
      const timer = setTimeout(() => {
        setShowAppSimulation(false);
      }, 2500); // Fecha após 2.5 segundos
      
      return () => clearTimeout(timer);
    }
  }, [showAppSimulation]);
  
  // Funções para simular a abertura dos aplicativos
  const simulateAppOpening = (app) => {
    setAppToSimulate(app);
    setShowAppSimulation(true);
  };
  
  return (
    <div className="card-modern p-6 my-8 relative">
      {/* Overlay para simulação de abertura de aplicativo */}
      {showAppSimulation && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center" 
             onClick={() => setShowAppSimulation(false)}>
          <div 
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 transform transition-all duration-300 ${showAppSimulation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            style={{ width: '80%', maxWidth: '900px', height: '60%', maxHeight: '600px' }}
          >
            {/* Barra de título do aplicativo */}
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
              <div className="flex items-center">
                {appToSimulate === 'dbeaver' && (
                  <>
                    <div className="w-6 h-6 mr-2 bg-blue-600 rounded flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" /><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" /><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" /></svg>
                    </div>
                    <span className="font-medium">DBeaver - Conexão MySQL</span>
                  </>
                )}
                {appToSimulate === 'notion' && (
                  <>
                    <div className="w-6 h-6 mr-2 bg-gray-900 rounded flex items-center justify-center text-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4v16h16V4H4zm12.9 4.7c.1.1.1.2.1.3v5.3c0 .2-.1.4-.3.5l-1.5.9c-.1.1-.2.1-.4.1s-.3 0-.4-.1l-5.3-3.1c-.2-.1-.3-.3-.3-.5v-5c0-.2.1-.4.3-.5l1.3-.8c.2-.3.7-.3 1 0l5.5 3z" /></svg>
                    </div>
                    <span className="font-medium">Notion - E-commerce Sprint Board</span>
                  </>
                )}
                {appToSimulate === 'figma' && (
                  <>
                    <div className="w-6 h-6 mr-2 bg-black rounded flex items-center justify-center text-white">
                      <svg className="w-3 h-3" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19 28.5C19 24.9196 21.9196 22 25.5 22C29.0804 22 32 24.9196 32 28.5C32 32.0804 29.0804 35 25.5 35C21.9196 35 19 32.0804 19 28.5Z" fill="#1ABCFE"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 47.5C6 43.9196 8.91959 41 12.5 41H19V47.5C19 51.0804 16.0804 54 12.5 54C8.91959 54 6 51.0804 6 47.5Z" fill="#0ACF83"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19 9.5V22H25.5C29.0804 22 32 19.0804 32 15.5C32 11.9196 29.0804 9 25.5 9H19V9.5Z" fill="#FF7262"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 15.5C6 19.0804 8.91959 22 12.5 22H19V9H12.5C8.91959 9 6 11.9196 6 15.5Z" fill="#F24E1E"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 28.5C6 32.0804 8.91959 35 12.5 35H19V22H12.5C8.91959 22 6 24.9196 6 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>
                    <span className="font-medium">Figma - Design System</span>
                  </>
                )}
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
              </div>
            </div>
            
            {/* Conteúdo simulado */}
            <div className="flex-1 overflow-hidden">
              {appToSimulate === 'dbeaver' && (
                <div className="flex h-full">
                  <div className="w-1/5 border-r border-gray-200 dark:border-gray-700 p-2">
                    <div className="font-medium mb-2 text-sm">Conexões</div>
                    <div className="pl-2 text-sm">
                      <div className="flex items-center mb-1 text-blue-600 dark:text-blue-400">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                        MySQL - E-commerce
                      </div>
                      <div className="pl-4 text-xs text-gray-600 dark:text-gray-400 mb-2">
                        <div>localhost:3306</div>
                        <div>ecommerce_db</div>
                      </div>
                      <div className="flex items-center mb-1 text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                        PostgreSQL - Analytics
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-2">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2 flex">
                      <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-t">Query</div>
                      <div className="px-3 py-1 text-gray-600 dark:text-gray-400 text-xs">Results</div>
                      <div className="px-3 py-1 text-gray-600 dark:text-gray-400 text-xs">History</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-sm h-32 overflow-auto">
                      <div className="text-green-700 dark:text-green-400">-- Otimização avançada de vendas mensais</div>
                      <div className="text-blue-600 dark:text-blue-400">WITH</div> monthly_sales <div className="text-blue-600 dark:text-blue-400">AS</div> (
                      <br />  <div className="text-blue-600 dark:text-blue-400 ml-4">SELECT</div> 
                      <div className="ml-8">p.id as product_id,</div>
                      <div className="ml-8">p.product_name,</div>
                      <div className="ml-8">c.category_name,</div>
                      <div className="ml-8">DATE_FORMAT(s.sale_date, '%Y-%m') as sale_month,</div>
                      <div className="ml-8">SUM(s.quantity) as units_sold,</div>
                      <div className="ml-8">SUM(s.quantity * s.price) as revenue</div>
                      <div className="ml-4 text-blue-600 dark:text-blue-400">FROM</div> sales s
                      <div className="ml-4 text-blue-600 dark:text-blue-400">JOIN</div> products p ON s.product_id = p.id
                    </div>
                    <div className="flex justify-end items-center mt-2 border-t border-gray-200 dark:border-gray-700 pt-2 text-xs">
                      <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mr-2">Executar</button>
                      <button className="px-3 py-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded">Cancelar</button>
                    </div>
                  </div>
                </div>
              )}
              
              {appToSimulate === 'notion' && (
                <div className="h-full overflow-auto">
                  <div className="p-2">
                    <div className="text-2xl font-bold mb-4">E-commerce Sprint Board</div>
                    <div className="flex mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                      <div className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md mr-2">Board</div>
                      <div className="px-3 py-1 text-gray-600 dark:text-gray-400 text-sm">List</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2">
                        <div className="font-medium mb-2 flex justify-between items-center">
                          <span>{t('skills.project.toDo')}</span>
                          <span className="text-xs bg-gray-200 dark:bg-gray-700 px-1.5 rounded">5</span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-2 rounded shadow-sm">
                            <div className="text-sm font-medium">{t('skills.project.schemaOptimization')}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('skills.project.highPriority')}</div>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-2 rounded shadow-sm">
                            <div className="text-sm font-medium">{t('skills.project.cartComponent')}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('skills.project.mediumEffort')}</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2">
                        <div className="font-medium mb-2 flex justify-between items-center">
                          <span>{t('skills.project.inProgress')}</span>
                          <span className="text-xs bg-gray-200 dark:bg-gray-700 px-1.5 rounded">2</span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-2 rounded shadow-sm">
                            <div className="text-sm font-medium">{t('skills.project.cacheLayer')}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('skills.project.inProgress')}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {appToSimulate === 'figma' && (
                <div className="h-full bg-gray-50 dark:bg-gray-900 flex">
                  <div className="w-10 bg-gray-200 dark:bg-gray-800 flex flex-col items-center py-2 space-y-4">
                    <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                    </div>
                    <div className="w-6 h-6 rounded bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" /></svg>
                    </div>
                  </div>
                  <div className="flex-1 p-2">
                    <div className="font-medium mb-2">{t('skills.figma.designSystem')}</div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                        <div className="text-sm font-medium mb-2">{t('skills.figma.colors')}</div>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                          <div className="w-8 h-8 rounded-full bg-green-500"></div>
                          <div className="w-8 h-8 rounded-full bg-red-500"></div>
                          <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                        <div className="text-sm font-medium mb-2">{t('skills.figma.buttons')}</div>
                        <div className="space-y-2">
                          <div className="px-4 py-1 bg-blue-500 text-white text-sm rounded-md inline-block">{t('skills.figma.primary')}</div>
                          <div className="px-4 py-1 border border-blue-500 text-blue-500 text-sm rounded-md inline-block ml-2">{t('skills.figma.secondary')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold mb-6">{t('skills.title')}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Project Management */}
        <div className="bg-bg-secondary dark:bg-gray-800 rounded-lg p-6 shadow-soft-md">
          <h4 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {t('skills.project.title')}
          </h4>
          
          <div className="mt-4">
            <h5 className="font-medium text-primary-500 dark:text-primary-400 mb-2">{t('skills.project.roadmap')}</h5>
            <div className="w-full aspect-[16/9] rounded-lg border border-gray-200 dark:border-gray-700 mb-3 bg-white dark:bg-gray-900 p-4 flex flex-col overflow-hidden">
              <div className="flex items-center mb-4">
                {/* ... rest of the code remains the same ... */}
              </div>
            </div>
          </div>
        </div>
        
        {/* MySQL & Database Skills */}
        <div className="bg-bg-secondary dark:bg-gray-800 rounded-lg p-6 shadow-soft-md">
          <h4 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11h6" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15h6" />
            </svg>
            {t('skills.mysql.title')}
          </h4>
          
          <div className="mt-4">
            <h5 className="font-medium text-primary-500 dark:text-primary-400 mb-2">{t('skills.mysql.subtitle')}</h5>
            <div className="mb-3 bg-gray-100 dark:bg-gray-700 rounded-lg p-3 font-mono text-sm">
              {/* Versão curta do SQL */}
              {/* ... rest of the code remains the same ... */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Figma & UI/UX */}
      <div className="bg-bg-secondary dark:bg-gray-800 rounded-lg p-6 shadow-soft-md mb-8">
        <h4 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
          {t('skills.figma.title')}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium text-primary-500 dark:text-primary-400 mb-2">{t('skills.figma.design')}</h5>
            <div className="w-full aspect-[16/9] rounded-lg border border-gray-200 dark:border-gray-700 mb-3 bg-white dark:bg-gray-800 p-4 overflow-hidden flex flex-col">
              {/* ... rest of the code remains the same ... */}
              <div className="flex items-center justify-between mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                <div className="flex items-center">
                  <button 
                    onClick={() => simulateAppOpening('figma')}
                    className="flex items-center relative z-10 cursor-pointer"
                    style={{ position: 'relative', zIndex: 50 }}
                  >
                    <div className="w-6 h-6 rounded bg-black dark:bg-white mr-2 flex items-center justify-center">
                      <svg viewBox="0 0 38 57" className="w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19 28.5C19 24.9196 21.9196 22 25.5 22C29.0804 22 32 24.9196 32 28.5C32 32.0804 29.0804 35 25.5 35C21.9196 35 19 32.0804 19 28.5Z" fill="#1ABCFE"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 47.5C6 43.9196 8.91959 41 12.5 41H19V47.5C19 51.0804 16.0804 54 12.5 54C8.91959 54 6 51.0804 6 47.5Z" fill="#0ACF83"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19 9.5V22H25.5C29.0804 22 32 19.0804 32 15.5C32 11.9196 29.0804 9 25.5 9H19V9.5Z" fill="#FF7262"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 15.5C6 19.0804 8.91959 22 12.5 22H19V9H12.5C8.91959 9 6 11.9196 6 15.5Z" fill="#F24E1E"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 28.5C6 32.0804 8.91959 35 12.5 35H19V22H12.5C8.91959 22 6 24.9196 6 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{t('skills.figma.designSystem')}</span>
                  </button>
                </div>
                <div className="flex space-x-2">
                  <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">{t('skills.figma.components')}</div>
                  <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">{t('skills.figma.assets')}</div>
                  <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">{t('skills.figma.prototype')}</div>
                </div>
              </div>
              
              {/* Design system components */}
              <div className="flex-1 grid grid-cols-4 gap-3">
                {/* Color palette */}
                <div className="col-span-1">
                  <div className="text-xs font-medium mb-2">Color System</div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-xs">Primary</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-800 mr-2"></div>
                      <span className="text-xs">Text</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-xs">Error</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-xs">Success</span>
                    </div>
                  </div>
                </div>
                
                {/* Components */}
                <div className="col-span-3">
                  <div className="text-xs font-medium mb-2">Components</div>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Buttons */}
                    <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <div className="text-xs mb-1 text-gray-500">Buttons</div>
                      <div className="space-y-1">
                        <div className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md w-16 text-center">Primary</div>
                        <div className="px-3 py-1 text-xs border border-blue-500 text-blue-500 rounded-md w-16 text-center">Secondary</div>
                        <div className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-600 rounded-md w-16 text-center">Disabled</div>
                      </div>
                    </div>
                    
                    {/* Form inputs */}
                    <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <div className="text-xs mb-1 text-gray-500">Form Inputs</div>
                      <div className="space-y-1">
                        <div className="px-3 py-1 text-xs bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md">Text input</div>
                        <div className="flex items-center text-xs">
                          <div className="w-3 h-3 rounded-full border border-blue-500 mr-1 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          </div>
                          <span>Radio</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <div className="w-3 h-3 rounded-sm border border-blue-500 mr-1 flex items-center justify-center">
                            <svg className="w-2 h-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>
                          </div>
                          <span>Checkbox</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-text-secondary dark:text-gray-300">
              {t('skills.figma.description')}
            </p>
          </div>
          
          <div>
            <h5 className="font-medium text-primary-500 dark:text-primary-400 mb-2">{t('skills.figma.collaboration')}</h5>
            <ul className="list-disc list-inside text-sm text-text-secondary dark:text-gray-300 space-y-2 mb-4">
              {t('skills.figma.points').map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-3 border-l-4 border-primary-500 mb-4">
              <p className="text-sm">
                {t('skills.figma.results')}
              </p>
            </div>
            
            <button 
              onClick={() => simulateAppOpening('figma')}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium relative z-10 cursor-pointer"
              style={{ position: 'relative', zIndex: 50 }}
            >
              <span>{t('skills.figma.openFigma')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Video Presentation Call-to-Action */}
      <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 dark:from-primary-800/20 dark:to-primary-900/20 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
              {t('skills.cta.title')}
            </h4>
            <p className="text-text-secondary dark:text-gray-300 max-w-xl">
              {t('skills.cta.description')}
            </p>
          </div>
          
          <a href="mailto:your-email@example.com?subject=Request%20for%20Technical%20Skills%20Video" 
             className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            {t('skills.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
}
