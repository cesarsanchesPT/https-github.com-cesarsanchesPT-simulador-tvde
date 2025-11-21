import React, { useState, useEffect } from 'react';
import { AppView, ExamResult, ExamCategory } from './types';
import Confetti from './components/Confetti';
import { HomeView } from './views/HomeView';
import { FAQView } from './views/FAQView';
import { ExamView } from './views/ExamView';
import { ResultsView } from './views/ResultsView';
import { StudyView } from './views/StudyView';
import { InfoView } from './views/InfoView';
import { HistoryView } from './views/HistoryView';
import { useAuth } from './contexts/AuthContext';
import { 
  Squares2X2Icon, BookOpenIcon, ChartBarIcon, InfoIcon, ChatBubbleLeftRightIcon, 
  HeartIcon, XMarkIcon, Bars3Icon, GiftIcon, ShareIcon, ChevronRightIcon,
  ArrowUpIcon, EnvelopeIcon, LogoutIcon
} from './components/Icons';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [lastResult, setLastResult] = useState<ExamResult | null>(null);
  const [reviewTarget, setReviewTarget] = useState<ExamResult | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory | null>(null);
  
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const { logout, user } = useAuth();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleNavigation = (view: AppView) => {
    setIsMobileMenuOpen(false);
    // Limpar target de review se sairmos da view de histórico
    if (view !== AppView.HISTORY) {
      setReviewTarget(null);
    }
    
    if (currentView === AppView.EXAM) {
      if (!window.confirm("Sair do exame vai perder o progresso. Continuar?")) return;
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    if (window.confirm("Tem a certeza que deseja terminar sessão?")) {
      logout();
      setIsMobileMenuOpen(false);
      setCurrentView(AppView.HOME);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case AppView.HOME:
        return (
          <HomeView 
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              handleNavigation(AppView.EXAM);
            }} 
            onOpenSupport={() => setIsSupportOpen(true)} 
            onOpenStudy={() => handleNavigation(AppView.STUDY_MENU)}
          />
        );
      case AppView.EXAM:
        return (
          <ExamView 
            examTitle={selectedCategory?.title || 'Exame Geral TVDE'}
            categoryId={selectedCategory?.id || 'tvde'}
            duration={selectedCategory?.examDurationMinutes || 60}
            totalQuestions={selectedCategory?.questionsPerExam || 30}
            onFinish={(result) => {
              setLastResult(result);
              if(result.passed) { setShowConfetti(true); setTimeout(() => setShowConfetti(false), 5000); }
              setCurrentView(AppView.RESULTS);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExit={() => handleNavigation(AppView.HOME)}
          />
        );
      case AppView.RESULTS:
        return lastResult ? (
          <ResultsView 
            result={lastResult} 
            onReview={() => {
              setReviewTarget(lastResult);
              handleNavigation(AppView.HISTORY);
            }} 
            onHome={() => handleNavigation(AppView.HOME)} 
            onHistory={() => handleNavigation(AppView.HISTORY)} 
            onRetry={() => handleNavigation(AppView.EXAM)} 
          />
        ) : <div className="text-center p-10">Sem resultados.</div>;
      case AppView.STUDY_MENU:
        return <StudyView onBack={() => handleNavigation(AppView.HOME)} />;
      case AppView.INFO_MENU:
        return <InfoView onBack={() => handleNavigation(AppView.HOME)} />;
      case AppView.HISTORY:
        return <HistoryView 
          onBack={() => handleNavigation(AppView.HOME)} 
          initialReviewResult={reviewTarget}
        />;
      case AppView.FAQ_MENU:
        return <FAQView onBack={() => handleNavigation(AppView.HOME)} />;
      default:
        return <HomeView onSelectCategory={() => handleNavigation(AppView.EXAM)} />;
    }
  };

  const renderHeader = () => (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40 safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation(AppView.HOME)}>
          <div className="bg-indigo-600 p-2 rounded-lg text-white shadow-sm">
            <Squares2X2Icon className="w-5 h-5" />
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Simulador TVDE Pro</h1>
        </div>

        <nav className="hidden md:flex gap-1">
          {[
            { id: AppView.HOME, label: 'Início', icon: Squares2X2Icon },
            { id: AppView.STUDY_MENU, label: 'Estudar', icon: BookOpenIcon },
            { id: AppView.HISTORY, label: 'Histórico', icon: ChartBarIcon },
            { id: AppView.INFO_MENU, label: 'Info', icon: InfoIcon },
            { id: AppView.FAQ_MENU, label: 'FAQs', icon: ChatBubbleLeftRightIcon },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                currentView === item.id 
                  ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
           <button 
            onClick={() => setIsSupportOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 hover:bg-pink-100 rounded-full text-sm font-medium transition-colors"
          >
            <HeartIcon className="w-4 h-4" />
            Apoiar
          </button>
          <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${
            isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
            {isOnline ? 'Online' : 'Offline'}
          </div>
          {user && (
            <button 
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
              title="Terminar Sessão"
            >
              <LogoutIcon className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={() => setIsSupportOpen(true)}
            className="p-2 text-pink-600 bg-pink-50 rounded-full hover:bg-pink-100 transition-colors"
          >
            <HeartIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-16 right-4 z-50 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 flex flex-col gap-1 animate-slide-up origin-top-right">
            {[
              { id: AppView.HOME, label: 'Início', icon: Squares2X2Icon },
              { id: AppView.STUDY_MENU, label: 'Estudar', icon: BookOpenIcon },
              { id: AppView.HISTORY, label: 'Histórico', icon: ChartBarIcon },
              { id: AppView.INFO_MENU, label: 'Informações', icon: InfoIcon },
              { id: AppView.FAQ_MENU, label: 'Perguntas', icon: ChatBubbleLeftRightIcon },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full px-4 py-3 text-left rounded-xl text-sm font-medium flex items-center gap-3 transition-colors ${
                  currentView === item.id ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${currentView === item.id ? 'bg-indigo-200/50' : 'bg-gray-100'}`}>
                   <item.icon className="w-4 h-4" />
                </div>
                {item.label}
              </button>
            ))}
            {user && (
              <>
                <div className="h-px bg-gray-100 my-1"></div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 text-left rounded-xl text-sm font-medium flex items-center gap-3 text-red-600 hover:bg-red-50 transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-red-100">
                     <LogoutIcon className="w-4 h-4" />
                  </div>
                  Terminar Sessão
                </button>
              </>
            )}
          </div>
        </>
      )}
    </header>
  );

  const renderSupportModal = () => {
    if (!isSupportOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative animate-slide-up">
          <button onClick={() => setIsSupportOpen(false)} className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10">
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-8 text-center text-white">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Apoie este Projeto</h2>
            <p className="text-pink-100 text-sm leading-relaxed">
              Este simulador é gratuito. O seu apoio ajuda a manter o serviço online.
            </p>
          </div>
          <div className="p-6 space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-100 rounded-2xl transition-all group">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 group-hover:scale-110 transition-transform">
                  <GiftIcon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">MB WAY</div>
                  <div className="text-xs text-gray-500">Rápido e seguro</div>
                </div>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-300 group-hover:text-indigo-400" />
            </button>
            <button className="w-full flex items-center justify-center gap-2 p-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
               <ShareIcon className="w-5 h-5" /> Partilhar com amigos
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderFooter = () => (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-indigo-600 p-1.5 rounded-lg">
                 <Squares2X2Icon className="w-5 h-5 text-white" />
               </div>
               <span className="text-xl font-bold text-white">Simulador TVDE Pro</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Ferramenta profissional para preparação de exames. Lei 45/2018.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:suporte@tvdepro.pt" className="hover:text-white transition-colors flex items-center gap-2">
                  <EnvelopeIcon className="w-4 h-4" /> suporte@tvdepro.pt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex justify-between items-center">
          <p className="text-xs text-slate-500">© 2025 Simulador TVDE Pro.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full text-sm transition-colors">
            <ArrowUpIcon className="w-4 h-4" /> Topo
          </button>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      {showConfetti && <Confetti />}
      {renderHeader()}
      {renderSupportModal()}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      {renderFooter()}
    </div>
  );
};

export default App;