export type HeroIntro = {
  bioText: string;
  imageAlt: string;
  imageCredit?: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
};
