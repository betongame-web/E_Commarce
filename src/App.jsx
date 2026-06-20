import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Clock3,
  Headphones,
  Heart,
  Menu,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  X,
} from 'lucide-react';

const categories = [
  { name: 'মোবাইল ফোন', image: '/assets/phone.png' },
  { name: 'ম্যাকবুক', image: '/assets/macbook.png' },
  { name: 'ল্যাপটপ', image: '/assets/laptop.png' },
  { name: 'সোনার গহনা', image: '/assets/gold-jewelry.png' },
  { name: 'ডায়মন্ড জুয়েলারি', image: '/assets/diamond-jewelry.png' },
  { name: 'স্মার্টওয়াচ', image: '/assets/watch.png' },
];

const products = [
  { id: 1, name: 'আইফোন প্রো ম্যাক্স', tag: 'নতুন কালেকশন', price: '১,৪৯,৯৯০', old: '২,৯৯,৯৮০', image: '/assets/phone.png' },
  { id: 2, name: 'ম্যাকবুক প্রো', tag: 'এম সিরিজ', price: '১,৮৯,৫০০', old: '৩,৭৯,০০০', image: '/assets/macbook.png' },
  { id: 3, name: 'প্রিমিয়াম গেমিং ল্যাপটপ', tag: 'উচ্চ ক্ষমতা', price: '১,২৫,০০০', old: '২,৫০,০০০', image: '/assets/laptop.png' },
  { id: 4, name: '২২ ক্যারেট সোনার সেট', tag: 'হস্তনির্মিত', price: '২,৬০,০০০', old: '৫,২০,০০০', image: '/assets/gold-jewelry.png' },
  { id: 5, name: 'ডায়মন্ড নেকলেস সেট', tag: 'সার্টিফায়েড', price: '৩,৪৯,০০০', old: '৬,৯৮,০০০', image: '/assets/diamond-jewelry.png' },
  { id: 6, name: 'লাক্সারি স্মার্টওয়াচ', tag: 'লিমিটেড এডিশন', price: '৪৯,৫০০', old: '৯৯,০০০', image: '/assets/watch.png' },
];

function bnNumber(value) {
  return String(value).replace(/\d/g, (digit) => '০১২৩৪৫৬৭৮৯'[digit]);
}

function App() {
  const [cart, setCart] = useState(0);
  const [liked, setLiked] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [seconds, setSeconds] = useState(24 * 60 * 60 + 36 * 60 + 4);

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((v) => (v > 0 ? v - 1 : 86399)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 1800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const time = useMemo(() => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [
      { label: 'দিন', value: days },
      { label: 'ঘণ্টা', value: hours },
      { label: 'মিনিট', value: minutes },
      { label: 'সেকেন্ড', value: secs },
    ];
  }, [seconds]);

  const addToCart = (name) => {
    setCart((v) => v + 1);
    setToast(`${name} কার্টে যোগ হয়েছে`);
  };

  const toggleLike = (id) => {
    setLiked((items) => (items.includes(id) ? items.filter((item) => item !== id) : [...items, id]));
  };

  return (
    <div className="site-shell">
      <div className="announcement">
        <div className="container announcement-inner">
          <span><Sparkles size={16} /> আজকের বিশেষ অফার: নির্বাচিত পণ্যে ৫০% পর্যন্ত ছাড়</span>
          <span className="announcement-right">নিরাপদ পেমেন্ট · দ্রুত ডেলিভারি · ২৪/৭ সহায়তা</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="অরোরা হোম">
            <img src="/assets/logo.png" alt="অরোরা লোগো" />
            <div><strong>অরোরা</strong><span>প্রিমিয়াম স্টোর</span></div>
          </a>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#home" onClick={() => setMenuOpen(false)}>হোম</a>
            <a href="#collections" onClick={() => setMenuOpen(false)}>কালেকশন</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>পণ্যসমূহ</a>
            <a href="#offers" onClick={() => setMenuOpen(false)}>অফার</a>
            <a href="#support" onClick={() => setMenuOpen(false)}>সহায়তা</a>
          </nav>
          <div className="nav-actions">
            <button className="icon-button hide-mobile" aria-label="খুঁজুন"><Search size={20} /></button>
            <button className="icon-button hide-mobile" aria-label="পছন্দের তালিকা"><Heart size={20} /></button>
            <button className="cart-button" aria-label="শপিং কার্ট">
              <ShoppingBag size={20} />
              <span>কার্ট</span>
              <b>{bnNumber(cart)}</b>
            </button>
            <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="মেনু">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><BadgeCheck size={17} /> ১০০% প্রিমিয়াম ও যাচাইকৃত পণ্য</div>
              <h1>স্টাইল, প্রযুক্তি ও বিলাসিতার <em>সেরা ঠিকানা</em></h1>
              <p>উচ্চ মূল্যের মোবাইল ফোন, ম্যাকবুক, ল্যাপটপ, সোনার গহনা ও ডায়মন্ড জুয়েলারির নির্বাচিত কালেকশন—এখন এক জায়গায়।</p>
              <div className="hero-actions">
                <a href="#products" className="btn btn-gold">এখনই কিনুন <ArrowLeft size={19} /></a>
                <a href="#collections" className="btn btn-ghost">কালেকশন দেখুন <ArrowRight size={19} /></a>
              </div>
              <div className="hero-proof">
                <div><strong>১৫০০+</strong><span>প্রিমিয়াম পণ্য</span></div>
                <div><strong>৪.৯/৫</strong><span>ক্রেতার রেটিং</span></div>
                <div><strong>৫০%</strong><span>সর্বোচ্চ ছাড়</span></div>
              </div>
            </div>

            <div className="hero-visual" aria-label="প্রিমিয়াম পণ্যের প্রদর্শনী">
              <div className="discount-seal"><span>৫০%</span><small>পর্যন্ত ছাড়</small></div>
              <div className="visual-card visual-card-main">
                <img src="/assets/phone.png" alt="প্রিমিয়াম মোবাইল ফোন" />
                <div className="visual-caption"><span>ফ্ল্যাগশিপ কালেকশন</span><strong>প্রিমিয়াম মোবাইল</strong></div>
              </div>
              <div className="visual-card visual-card-side">
                <img src="/assets/gold-jewelry.png" alt="সোনার গহনা" />
                <div className="visual-caption"><span>বিশেষ সংগ্রহ</span><strong>সোনার গহনা</strong></div>
              </div>
              <div className="floating-chip chip-one"><ShieldCheck size={18} /> আসল পণ্যের নিশ্চয়তা</div>
              <div className="floating-chip chip-two"><Truck size={18} /> দ্রুত ডেলিভারি</div>
            </div>
          </div>
        </section>

        <section className="category-section" id="collections">
          <div className="container">
            <div className="section-heading heading-row">
              <div><span>প্রিমিয়াম বিভাগ</span><h2>আপনার পছন্দের কালেকশন</h2></div>
              <a href="#products">সব পণ্য দেখুন <ArrowLeft size={18} /></a>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <button className="category-card" key={category.name}>
                  <span className="category-image"><img src={category.image} alt={category.name} /></span>
                  <strong>{category.name}</strong>
                  <small>নতুন সংগ্রহ <ArrowLeft size={14} /></small>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase-section" id="offers">
          <div className="container">
            <div className="section-heading centered">
              <span>সেরা অফার</span>
              <h2>দাম কম, মানে কোনো আপস নয়</h2>
              <p>বিশেষভাবে নির্বাচিত প্রিমিয়াম পণ্যে সীমিত সময়ের জন্য আকর্ষণীয় মূল্যছাড়।</p>
            </div>
            <div className="showcase-grid">
              <article className="feature-banner banner-large">
                <div className="banner-copy"><b>৫০% ছাড়</b><h3>ফ্ল্যাগশিপ মোবাইল ফোন</h3><p>প্রিমিয়াম ডিজাইন, শক্তিশালী ক্যামেরা ও সর্বোচ্চ পারফরম্যান্স।</p><button onClick={() => addToCart('ফ্ল্যাগশিপ মোবাইল ফোন')}>এখনই কিনুন <ArrowLeft size={17} /></button></div>
                <img src="/assets/phone.png" alt="ফ্ল্যাগশিপ মোবাইল ফোন" />
              </article>
              <article className="feature-banner banner-small dark-banner">
                <div className="banner-copy"><b>৫০% ছাড়</b><h3>ম্যাকবুক প্রো</h3><button onClick={() => addToCart('ম্যাকবুক প্রো')}>কিনুন <ArrowLeft size={17} /></button></div>
                <img src="/assets/macbook.png" alt="ম্যাকবুক প্রো" />
              </article>
              <article className="feature-banner banner-small gold-banner">
                <div className="banner-copy"><b>৫০% ছাড়</b><h3>২২ ক্যারেট গহনা</h3><button onClick={() => addToCart('২২ ক্যারেট গহনা')}>কিনুন <ArrowLeft size={17} /></button></div>
                <img src="/assets/gold-jewelry.png" alt="সোনার গহনা" />
              </article>
            </div>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="container">
            <div className="section-heading heading-row">
              <div><span>জনপ্রিয় পণ্য</span><h2>আমাদের সেরা পণ্যসমূহ</h2></div>
              <div className="filter-pill">সব বিভাগ <ChevronDown size={17} /></div>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-media">
                    <span className="discount-badge">৫০% ছাড়</span>
                    <button className={liked.includes(product.id) ? 'wish active' : 'wish'} onClick={() => toggleLike(product.id)} aria-label="পছন্দের তালিকায় যোগ করুন"><Heart size={19} /></button>
                    <img src={product.image} alt={product.name} />
                    <button className="quick-add" onClick={() => addToCart(product.name)}><ShoppingCart size={18} /> কার্টে যোগ করুন</button>
                  </div>
                  <div className="product-body">
                    <span>{product.tag}</span>
                    <h3>{product.name}</h3>
                    <div className="rating"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><small>৪.৯</small></div>
                    <div className="price"><strong>৳{product.price}</strong><del>৳{product.old}</del></div>
                    <button className="buy-now" onClick={() => addToCart(product.name)}>এখনই কিনুন</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="deal-section">
          <div className="container deal-grid">
            <div className="deal-copy">
              <span className="eyebrow"><Clock3 size={17} /> আজকের মেগা ডিল</span>
              <h2>সব প্রিমিয়াম পণ্যে <em>৫০% পর্যন্ত ছাড়!</em></h2>
              <p>অফার শেষ হওয়ার আগেই আপনার পছন্দের পণ্যটি অর্ডার করুন। সীমিত স্টক প্রযোজ্য।</p>
              <div className="countdown">
                {time.map((item) => <div key={item.label}><strong>{bnNumber(String(item.value).padStart(2, '0'))}</strong><span>{item.label}</span></div>)}
              </div>
              <button className="btn btn-gold" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>অফার নিন <ArrowLeft size={19} /></button>
            </div>
            <div className="deal-visual">
              <div className="deal-circle"><span>৫০%</span><small>পর্যন্ত ছাড়</small></div>
              <img className="deal-phone" src="/assets/phone.png" alt="অফারের মোবাইল ফোন" />
              <img className="deal-jewel" src="/assets/diamond-jewelry.png" alt="অফারের ডায়মন্ড জুয়েলারি" />
            </div>
          </div>
        </section>

        <section className="benefits" id="support">
          <div className="container benefit-grid">
            <div><Truck /><span><strong>দ্রুত ডেলিভারি</strong><small>সারা দেশে নির্ভরযোগ্য সেবা</small></span></div>
            <div><ShieldCheck /><span><strong>নিরাপদ পেমেন্ট</strong><small>সুরক্ষিত ও সহজ লেনদেন</small></span></div>
            <div><BadgeCheck /><span><strong>আসল পণ্যের নিশ্চয়তা</strong><small>যাচাইকৃত প্রিমিয়াম কালেকশন</small></span></div>
            <div><Headphones /><span><strong>২৪/৭ সহায়তা</strong><small>প্রয়োজনে সবসময় পাশে</small></span></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><a className="brand" href="#home"><img src="/assets/logo.png" alt="অরোরা লোগো" /><div><strong>অরোরা</strong><span>প্রিমিয়াম স্টোর</span></div></a><p>প্রযুক্তি, স্টাইল ও বিলাসিতার সেরা পণ্য এক ছাদের নিচে।</p></div>
          <div><h4>দ্রুত লিংক</h4><a href="#home">হোম</a><a href="#collections">কালেকশন</a><a href="#products">পণ্যসমূহ</a></div>
          <div><h4>সহায়তা</h4><a href="#support">ডেলিভারি তথ্য</a><a href="#support">রিটার্ন নীতি</a><a href="#support">যোগাযোগ</a></div>
          <div><h4>নিউজলেটার</h4><p>নতুন অফার পেতে ইমেইল দিন।</p><div className="newsletter"><input type="email" placeholder="আপনার ইমেইল" /><button aria-label="সাবস্ক্রাইব"><ArrowLeft /></button></div></div>
        </div>
        <div className="container copyright">© ২০২৬ অরোরা প্রিমিয়াম স্টোর। সর্বস্বত্ব সংরক্ষিত।</div>
      </footer>

      {toast && <div className="toast"><BadgeCheck size={19} /> {toast}</div>}
    </div>
  );
}

export default App;
