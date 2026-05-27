import type { CategoryLocaleContent } from '../../types';

const slug = 'relojoaria';
const title = 'Ferramentas de Relojoaria & Guias de Referência';
const description = 'Utilitários de relojoaria de nível profissional para entusiastas de relógios-nitore a precisão, desmagnetize movimentos, calcule o uso no pulso e explore referências de posições de coroa para calibres populares.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Ferramentas Essenciais para Entusiastas de Relógios', level: 2 },
    { type: 'paragraph', html: 'Quer você esteja regulando um movimento mecânico, desmagnetizando um relógio recentemente magnetizado, monitorando a frequência com que usa um relógio ou aprendendo as posições da coroa do seu calibre favorito, este conjunto coloca ferramentas profissionais de relojoaria ao seu alcance-m necessidade de equipamentos caros.' },
    { type: 'title', text: 'Precisão, Desmagnetização & Referências de Coroa', level: 2 },
    { type: 'paragraph', html: 'Desde monitorar o desvio diário em relação ao tempo atômico até desmagnetizar um movimento com segurança, desde saber exatamente quando usou um relógio pela última vez até entender cada posição da coroa em um calibre ETA ou Miyota-tas ferramentas cobrem as necessidades diárias de qualquer colecionador ou entusiasta.' },
    {
      type: 'stats', items: [
        { label: 'Ferramentas', value: '4', icon: 'mdi:tools' },
        { label: 'Calibres', value: '8+', icon: 'mdi:engine' },
        { label: 'Idiomas', value: '15', icon: 'mdi:translate' },
        { label: 'Privacidade de Dados', value: 'Local', icon: 'mdi:shield-check' },
      ]
    },
  ],
};
