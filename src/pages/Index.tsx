import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    { name: "MUSCIMOL OIL", desc: "глубокое восстановление нервной системы", gradient: "from-blue-400 to-cyan-400" },
    { name: "ERINACEUS OIL", desc: "ясность ума и когнитивные функции", gradient: "from-purple-400 to-pink-400" },
    { name: "WILLPOWER OIL", desc: "ровная энергия без стимуляторов", gradient: "from-cyan-400 to-blue-500" },
    { name: "CORDYCEPS OIL", desc: "выносливость и устойчивость к стрессу", gradient: "from-violet-400 to-purple-500" },
    { name: "IMMUNO OIL", desc: "поддержка иммунитета", gradient: "from-blue-500 to-indigo-500" },
    { name: "NOOTROPIC OIL", desc: "острота фокуса и памяти", gradient: "from-purple-500 to-pink-500" }
  ];

  const testimonials = [
    { title: "ИСЧЕЗЛА ТРЕВОГА", text: "После MUSCIMOL OIL я стала засыпать за 10 минут и наконец-то просыпаться отдохнувшей. Исчезла фоновая тревога, которая годами меня изматывала. Теперь у меня хватает терпения и на детей, и на работу. Это не магия, это просто наконец-то работающая система." },
    { title: "Стал сдержанным и спокойным", text: "Проснулся выспавшимся, хотя время сна не изменилось. Ушел мозговой шум, стал более сдержанным и спокойным. Пропил 3 курса. Тесты на головоломки показали улучшение результатов." },
    { title: "Не было сил, вышла из ужасного состояния", text: "Я была в ужасном состоянии (мне 63): тряслись руки, не было сил стоять в душе. Через 10 дней приема мозг прояснился, дрожь прошла. Сегодня я вернула свою активность, легко справляюсь с работой дизайнера и больше не принимаю таблетки от давления." },
    { title: "Бросил вредные привычки, успокоил нервы", text: "Забыл запах алкоголя, сигарет больше нет в моей жизни. Появилась энергия — снова делаю зарядку, турник, мне 51 год. Нервы пришли в спокойствие. Это третий курс, продукт работает." },
    { title: "Изменения, которых мы ждали много лет", text: "У моего ребенка-инвалида после приема появился диалог, эмоциональная выносливость, ум стал более пытливым. В школе преподаватели заметили, что он стал более усидчивым. Это те изменения, которых мы ждали много лет." },
    { title: "Перестал болеть", text: "Этой осенью, когда все вокруг болели, меня пронесло. Иммуно реально укрепил иммунитет, поборол усталость. Одновременно кордицепс вернул энергию после тяжелого периода, а мусцимол подарил спокойствие и глубокий сон. Безумно доволен — качественно сделано, результат ощущается." }
  ];

  const objections = [
    { icon: "Shield", title: "Боюсь побочек и привыкания", text: "Наши формулы — мягкие и нестимулирующие. Они не «разгоняют», а восстанавливают ЕСТЕСТВЕННЫЕ процессы организма. Идеально подходят для чувствительных, занятых и даже пожилых людей." },
    { icon: "Sparkles", title: "Уже пробовал БАДы — не почувствовал эффекта", text: "В отличие от разрозненных добавок, это — система. Экстракты + режим + знания + поддержка. Эффект ты почувствуешь уже в первую неделю." },
    { icon: "BookOpen", title: "Сложно разобраться, что и когда принимать", text: "Ты получаешь готовый режим приема и ежедневные напоминания. Всё, что от тебя требуется — следовать простым шагам." },
    { icon: "TrendingUp", title: "Это дорого", text: "Комплект экстрактов отдельно стоит 60 000 ₽. Марафон — это твой шанс получить систему в 2 раза дешевле. Это инвестиция, которая окупится твоей энергией и продуктивностью." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden py-16 px-6 min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20"></div>
        <div className="max-w-5xl mx-auto text-center animate-fade-in relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-white border-0 px-6 py-2 text-base shadow-lg">
            🔥 Старт — 1 января 2025
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
            Просыпаешься разбитым, а к вечеру нет сил ни на себя, ни на семью?
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-4 leading-relaxed">
            А теперь представь: по утрам ты встаешь <span className="font-semibold text-primary">отдохнувшим</span>. 
            В голове — <span className="font-semibold text-accent">ясность</span>, в теле — здоровье и сила.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            И нет, это не новогоднее чудо. Это — результат марафона <span className="font-bold text-white">BIOAURA</span>.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all animate-pulse-slow"
          >
            Войти в число избранных
          </Button>
          <p className="mt-6 text-sm text-gray-300">
            Когда места закончатся — попасть будет невозможно
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            ❓ Почему ничего не работало?
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Возможно, ты уже пробовал «больше спать», «нормально питаться» и «пить добавки». 
            Но это не сработало, потому что проблема глубже:
          </p>
          <div className="space-y-6">
            {[
              { icon: "Brain", title: "Твоя нервная система истощена", text: "хроническим стрессом. Отсюда — тревога, которая не отпускает, и сон, который не восстанавливает." },
              { icon: "Lightbulb", title: "Твой мозг перегружен", text: "и не может очищаться. Отсюда — «туман», прокрастинация и ощущение, что ты работаешь на 20% от своих возможностей." },
              { icon: "Activity", title: "Твое тело работает на износ", text: "не успевая восстанавливаться. Отсюда — усталость с самого утра и отсутствие энергии." }
            ].map((item, i) => (
              <Card key={i} className="p-6 border-l-4 border-primary bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-full text-white shrink-0">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-xl font-semibold text-center mt-10 text-gray-800">
            Организму нужна не просто «передышка». Ему нужна <span className="text-accent">полная перезагрузка</span> по четкому плану.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
            <img src="https://cdn.poehali.dev/projects/bcf4ddef-f9fc-49b9-82c4-1e566576a493/files/f099865e-6be3-4924-ab6f-8be14dcd1d40.jpg" alt="Восстановление мозга" className="w-full h-56 object-cover" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            🚀 Марафон BIOAURA — это как раз такой план
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Это не обещание «волшебной таблетки». Это — 2-месячная система, которая на научном уровне восстанавливает твои ресурсы:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", icon: "Pill", title: "Дает телу и мозгу недостающие элементы", text: "6 мощных CO₂-экстрактов (включая мухомор и ежовик) + набор БАД для глубокого восстановления" },
              { num: "2", icon: "CheckCircle2", title: "Встраивает привычку заботы о себе", text: "Ежедневные ритуалы, простые задания и поддержка кураторов, чтобы ты больше никогда не возвращался в состояние выгорания" },
              { num: "3", icon: "GraduationCap", title: "Объясняет, как всё устроено", text: "Ты поймешь работу своего мозга и тела, чтобы навсегда сохранить контроль над своим состоянием" }
            ].map((item, i) => (
              <Card key={i} className="p-8 text-center hover:shadow-xl transition-all border-2 border-gray-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.num}
                </div>
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <Icon name={item.icon} size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            📦 Что входит в марафон?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-2">
            Ты получаешь не случайный набор добавок, а продуманную систему.
          </p>
          <p className="text-lg text-gray-700 text-center mb-4 font-semibold">
            Она не закончится через 2 месяца, а останется с тобой навсегда.
          </p>
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-2">Общая стоимость всех элементов — <span className="line-through">~60 000 рублей</span></p>
            <p className="text-3xl font-bold text-accent">По условиям марафона: 33 000 ₽</p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="text-3xl">1.</span> Комплект 6 уникальных СО₂-экстрактов на 2 месяца
            </h3>
            <p className="text-gray-600 mb-6">Инновационная основа системы — экстракты грибов и растений с максимальной биодоступностью:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, i) => (
                <Card key={i} className="p-6 hover:scale-105 transition-transform border-0 shadow-lg overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`}></div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 mb-8 bg-white">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
              <span className="text-3xl">2.</span> Комплект вспомогательных БАД + режим приема
            </h3>
            <p className="text-gray-600 mb-4">Всё необходимое для полноценной работы системы — не нужно ничего докупать:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 shrink-0 mt-1" size={20} />
                <span>Базовая поддержка (рыбий жир, магний и другие essential-добавки)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 shrink-0 mt-1" size={20} />
                <span>Готовый режим приема — что, когда и как принимать для максимального эффекта</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 shrink-0 mt-1" size={20} />
                <span>Ежедневный трекер привычек — чтобы не пропустить ни дня</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-primary">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
              <span className="text-3xl">3.</span> Марафон «Тело + Мозг» — твоя инструкция по применению
            </h3>
            <p className="text-gray-600 mb-4">Теория + практика от исследователя биохакинга и создателя BIOAURA:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>Структура:</strong> 1-й месяц — восстановление тела, 2-й месяц — полная перезагрузка мозга и переписывание программ</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>Подкасты и практики</strong> — научные методики и личный опыт</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>Поддержка кураторов</strong> — ответы на вопросы в режиме реального времени</span>
              </li>
            </ul>
          </Card>

          <div className="text-center mt-12">
            <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
              <img src="https://cdn.poehali.dev/projects/bcf4ddef-f9fc-49b9-82c4-1e566576a493/files/32ac07ee-94d3-4e59-bf08-8248ef7d96b8.jpg" alt="Продукты BIOAURA" className="w-full h-56 object-cover" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Всего за <span className="text-accent">33 000 ₽</span> ты получаешь полную перезагрузку своего здоровья
            </p>
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              Хочу присоединиться
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            🔎 Боишься, что не сработает?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Мы нашли способ развеять твои сомнения:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {objections.map((obj, i) => (
              <Card key={i} className="p-6 hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-full text-white shrink-0">
                    <Icon name={obj.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{obj.title}</h3>
                    <p className="text-gray-600 text-sm">{obj.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-xl font-semibold text-center text-gray-800">
            Единственный риск, который остался — это отложить свое здоровье и заботу о себе еще на один год.
          </p>
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-lg px-10 py-6 rounded-full shadow-xl"
            >
              Забронировать место
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            💬 Истории, которыми делятся наши клиенты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <Card key={i} className="p-6 bg-white hover:scale-105 transition-transform">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{test.title}</h3>
                <p className="text-gray-600 text-sm italic">«{test.text}»</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 px-6 bg-gradient-to-br from-primary via-accent to-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ⚡ Начни Новый год с перезагрузки организма
          </h2>
          <p className="text-xl mb-8 opacity-95">
            У нас больше 30 000 подписчиков, но мы запускаем марафон только для <span className="font-bold">300 человек</span> — 
            чтобы дать каждому максимальную поддержку.
          </p>
          <div className="space-y-4 mb-10 text-lg">
            <p className="flex items-center justify-center gap-2">
              <Icon name="CheckCircle2" size={24} />
              <span><strong>Старт — 1 января.</strong> Идеальный день, чтобы начать жить по-новому.</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Gift" size={24} />
              <span><strong>Подарок для всех, кто дойдёт до конца:</strong> набор уникальных сладостей с экстрактами.</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Zap" size={24} />
              <span><strong>Это твой уникальный шанс.</strong> Когда набор будет распродан, попасть на марафон будет невозможно.</span>
            </p>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 text-xl px-12 py-7 rounded-full shadow-2xl hover:scale-105 transition-transform font-bold"
          >
            Успеть занять место →
          </Button>
          <p className="mt-8 text-lg opacity-90">
            Сделай себе главный подарок в этом году — верни себе свое здоровье. Ведь оно бесценно.
          </p>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-base opacity-80">
              <strong>P.S.</strong> Через 2 месяца ты либо проснешься с ясной головой и полный энергией, либо... как обычно. 
              <span className="block mt-2 font-semibold">Выбор за тобой</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2025 BIOAURA. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;