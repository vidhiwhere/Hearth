import { useState, useRef, useEffect } from 'react';
import styles from './Menu.module.css';
import PageHero from './PageHero';

const categories = [
  { id: 'all',      label: 'All'       },
  { id: 'breads',   label: 'Breads'    },
  { id: 'pastries', label: 'Pastries'  },
  { id: 'cakes',    label: 'Cakes'     },
  { id: 'drinks',   label: 'Drinks'    },
];

const items = [
  // Breads
  {
    id: 'sourdough', category: 'breads', emoji: '🍞',
    name: 'Classic Sourdough',
    origin: 'Heritage Wheat · Long Ferment',
    desc: 'Open-crumb loaf with a blistered crust. 18-hour cold fermentation on stone-milled flour.',
    price: '₹280',
  },
  {
    id: 'multigrain', category: 'breads', emoji: '🌾',
    name: 'Multigrain Loaf',
    origin: 'Oat · Flax · Sunflower',
    desc: 'Seeded with oats, flax and sunflower — hearty, nutty and deeply nourishing.',
    price: '₹240',
  },
  {
    id: 'focaccia', category: 'breads', emoji: '🫓',
    name: 'Rosemary Focaccia',
    origin: 'Olive Oil · Sea Salt · Garlic',
    desc: 'Dimpled, olive-oil-kissed flatbread topped with fresh rosemary and roasted garlic.',
    price: '₹200',
  },
  {
    id: 'rye', category: 'breads', emoji: '🍂',
    name: 'Dark Rye Loaf',
    origin: 'Rye Flour · Caraway · Molasses',
    desc: 'Dense Scandinavian-style rye with a complex malty flavour. Pairs beautifully with aged cheese.',
    price: '₹310',
  },
  // Pastries
  {
    id: 'croissant', category: 'pastries', emoji: '🥐',
    name: 'Butter Croissant',
    origin: '96 Layers · French Lamination',
    desc: 'Impossibly flaky outside, cloud-soft within. Pure Normandy butter, nothing else.',
    price: '₹120',
  },
  {
    id: 'danish', category: 'pastries', emoji: '🍮',
    name: 'Caramel Danish',
    origin: 'Puff Pastry · Salted Caramel Cream',
    desc: 'Spiral pastry coiled around velvety caramel cream, finished with a brûlée sugar top.',
    price: '₹150',
  },
  {
    id: 'muffin', category: 'pastries', emoji: '🧁',
    name: 'Brown Butter Muffin',
    origin: 'Noisette Butter · Dark Chocolate · Walnut',
    desc: 'Crinkle-topped muffin with deep nutty-butter aroma, laced with Valrhona chocolate chips.',
    price: '₹110',
  },
  {
    id: 'eclair', category: 'pastries', emoji: '🍫',
    name: 'Coffee Éclair',
    origin: 'Choux Pastry · Espresso Crème Pâtissière',
    desc: 'Delicate choux filled with espresso pastry cream, glazed with a mirror chocolate finish.',
    price: '₹160',
  },
  // Cakes
  {
    id: 'caramel-cake', category: 'cakes', emoji: '🎂',
    name: 'Caramel Drizzle Cake',
    origin: 'Three-Layer Sponge · Salted Caramel',
    desc: 'A dramatic caramel drip cake with silken buttercream and a scatter of fleur de sel.',
    price: '₹650',
  },
  {
    id: 'mocha-cake', category: 'cakes', emoji: '☕',
    name: 'Mocha Mud Cake',
    origin: 'Valrhona Chocolate · Single-Origin Espresso',
    desc: 'Fudgy, intense chocolate-coffee cake with a velvet ganache coat and cocoa snow.',
    price: '₹580',
  },
  {
    id: 'rose-cake', category: 'cakes', emoji: '🌸',
    name: 'Rose & Cardamom Cake',
    origin: 'Rosewater · Green Cardamom · Edible Petals',
    desc: 'A fragrant celebration cake with floral cream cheese frosting and crystallised petals.',
    price: '₹720',
  },
  // Drinks
  {
    id: 'latte', category: 'drinks', emoji: '☕',
    name: 'Hearth Signature Latte',
    origin: 'Single-Origin Espresso · Oat Milk',
    desc: 'Our house blend espresso with silky oat milk, kissed with caramel and a touch of cinnamon.',
    price: '₹180',
  },
  {
    id: 'coldbrew', category: 'drinks', emoji: '🧋',
    name: 'Caramel Cold Brew',
    origin: '18-Hour Steep · Salted Caramel',
    desc: 'Slow-steeped cold brew over hand-carved ice, finished with house salted caramel syrup.',
    price: '₹220',
  },
  {
    id: 'chai', category: 'drinks', emoji: '🍵',
    name: 'Masala Chai',
    origin: 'Assam Leaf · Ginger · Cardamom · Clove',
    desc: 'A warming house-blend simmered low and slow. Bold, spiced, deeply comforting.',
    price: '₹120',
  },
];

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function MenuItem({ item, index }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div
      ref={ref}
      className={`${styles.item} ${visible ? styles.itemVisible : ''}`}
      style={{ transitionDelay: `${(index % 6) * 55}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.itemLeft}>
        <div className={styles.itemEmoji}>{item.emoji}</div>
        <div className={styles.itemText}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemOrigin}>{item.origin}</div>
          <div className={`${styles.itemDesc} ${hovered ? styles.itemDescVisible : ''}`}>
            {item.desc}
          </div>
        </div>
      </div>

      <div className={styles.itemRight}>
        <span className={styles.itemPrice}>{item.price}</span>
        <button
          className={`${styles.addBtn} ${added ? styles.addBtnDone : ''}`}
          onClick={handleAdd}
          aria-label="Add to order"
        >
          {added ? '✓' : '+'}
        </button>
      </div>

      <div className={`${styles.rule} ${hovered ? styles.ruleActive : ''}`} />
    </div>
  );
}

export default function Menu({ standalone }) {
  const [active, setActive] = useState('all');
  const sectionRef = useRef(null);
  const headerVisible = useInView(sectionRef);

  const filtered = active === 'all' ? items : items.filter(i => i.category === active);

  // Group by category for the display
  const grouped = categories
    .filter(c => c.id !== 'all')
    .map(c => ({
      ...c,
      items: filtered.filter(i => i.category === c.id),
    }))
    .filter(g => g.items.length > 0);

  return (
    <>
    {standalone && (
      <PageHero
        label="The Hearth Collection"
        title={<>Our <em>Full Menu</em></>}
        subtitle="Prepared fresh each morning. Ingredients sourced within 100 km. Everything made entirely by hand."
      />
    )}
    <section id="menu" className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div
          ref={sectionRef}
          className={`${styles.header} ${headerVisible ? styles.headerVisible : ''}`}
        >
          <span className={styles.sectionLabel}>Our Menu</span>
          <h2 className={styles.sectionTitle}>
            The Hearth<br />
            <em>Collection</em>
          </h2>
          <p className={styles.sectionSub}>
            Prepared fresh each morning. Ingredients sourced within 100 km.<br />
            Everything made entirely by hand.
          </p>

          {/* Filter tabs */}
          <div className={styles.tabs}>
            {categories.map(c => (
              <button
                key={c.id}
                id={`tab-${c.id}`}
                className={`${styles.tab} ${active === c.id ? styles.tabActive : ''}`}
                onClick={() => setActive(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu list — grouped by category */}
        <div className={styles.menuBody}>
          {grouped.map((group) => (
            <div key={group.id} className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupName}>{group.label}</span>
                <div className={styles.groupRule} />
              </div>
              <div className={styles.groupItems}>
                {group.items.map((item, i) => (
                  <MenuItem key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>  
  );
}
