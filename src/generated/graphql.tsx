import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Safe string custom scalar type that does not allow xss attacks */
  SafeString: any;
  /** The Email scalar type represents E-Mail addresses compliant to RFC 822. */
  Email: any;
  /** Date custom scalar type */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};




export type Beoordeling = {
  __typename?: 'Beoordeling';
  BeoorderlingID: Scalars['Int'];
  VakID: Scalars['Int'];
  PersoonID?: Maybe<Scalars['Int']>;
  Status?: Maybe<BeoordelingStatusEnum>;
  Rapport?: Maybe<Scalars['String']>;
  RapportCijfer?: Maybe<Scalars['Int']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  DatumGepland?: Maybe<Scalars['Date']>;
  Beoordelaar?: Maybe<Persoon>;
};

export type Certificaat = {
  __typename?: 'Certificaat';
  CertificaatID: Scalars['Int'];
  Code: Scalars['String'];
  Naam: Scalars['String'];
};

export type Certificering = {
  __typename?: 'Certificering';
  CertificeringID: Scalars['Int'];
  CertificaatID: Scalars['Int'];
  NormVersieID?: Maybe<Scalars['Int']>;
  PersoonID?: Maybe<Scalars['Int']>;
  BeginDatum?: Maybe<Scalars['Date']>;
  EindDatum?: Maybe<Scalars['Date']>;
  Opmerkingen: Scalars['String'];
  Nummer: Scalars['String'];
  NummerWeergave: Scalars['String'];
  Status: CertificeringStatusEnum;
  /** Datum waarop alle verplichte bijeenkomsten zijn gevolgd */
  DatumVoldaan?: Maybe<Scalars['Date']>;
  IsVerlengingVan?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumIngetrokkenVan?: Maybe<Scalars['Date']>;
  DatumIngetrokkenTot?: Maybe<Scalars['Date']>;
  UitstelVerleend?: Maybe<Scalars['Boolean']>;
  UitstelTot?: Maybe<Scalars['Date']>;
  Certificaat?: Maybe<Certificaat>;
  Passen?: Maybe<Array<Maybe<Pas>>>;
};

export type Competentie = {
  __typename?: 'Competentie';
  CompetentieID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
  Code: Scalars['String'];
};

export type Contactgegevens = {
  __typename?: 'Contactgegevens';
  ContactgegevensID: Scalars['Int'];
  Adresregel1: Scalars['String'];
  Adresregel2?: Maybe<Scalars['String']>;
  Huisnummer: Scalars['String'];
  HuisnummerToevoeging?: Maybe<Scalars['String']>;
  Postcode: Scalars['String'];
  Woonplaats: Scalars['String'];
  Land: Scalars['String'];
  Email?: Maybe<Scalars['String']>;
  Telefoon?: Maybe<Scalars['String']>;
  Fax?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  TerAttentieVan?: Maybe<Scalars['String']>;
  RekeningNummer?: Maybe<Scalars['String']>;
  EmailWerkgever?: Maybe<Scalars['String']>;
  FactuurAdres?: Maybe<Scalars['String']>;
  DisplayAddress?: Maybe<Scalars['String']>;
};

export type ContactpersoonExamenInstelling = {
  __typename?: 'ContactpersoonExamenInstelling';
  ExamenInstellingID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  ContactgegevensID: Scalars['Int'];
  Naam: Scalars['String'];
  IsBtwPlichtig: Scalars['Boolean'];
  IsActief: Scalars['Boolean'];
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  Persoon: Persoon;
};

export type Cursus = {
  __typename?: 'Cursus';
  CursusID: Scalars['Int'];
  VakID?: Maybe<Scalars['Int']>;
  CursusleiderID?: Maybe<Scalars['Int']>;
  Prijs?: Maybe<Scalars['Float']>;
  Titel?: Maybe<Scalars['String']>;
  Promotietekst?: Maybe<Scalars['String']>;
  IsBesloten?: Maybe<Scalars['Boolean']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  CursusCode?: Maybe<Scalars['String']>;
  AocKenmerk?: Maybe<Scalars['String']>;
  ExamenCursusID?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  Sessies?: Maybe<Array<Maybe<Sessie>>>;
  Vak: Vak;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  /**  Only available when sub query is available  */
  EersteSessieDatum?: Maybe<Scalars['Date']>;
  /**  Only available when sub query is available  */
  AantalCursusDeelnames?: Maybe<Scalars['Int']>;
  /**  Only available when sub query is available  */
  VakExamenType?: Maybe<VakExamenTypeEnum>;
  /**  Only available when sub query is available  */
  StudieresultaatStatus?: Maybe<StudieresultaatStatusEnum>;
  /**  Only available when sub query is available  */
  LocatiePlaats?: Maybe<Scalars['String']>;
};

export type CursusDeelname = {
  __typename?: 'CursusDeelname';
  CursusDeelnameID: Scalars['Int'];
  CursusID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Status: CursusDeelnameStatusEnum;
  Opmerkingen?: Maybe<Scalars['String']>;
  CertificeringID?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  Cursus: Cursus;
  Certificering?: Maybe<Certificering>;
  Persoon: Persoon;
  StudieresultaatStatus?: Maybe<StudieresultaatStatusEnum>;
  GeslaagdVoorCertificaatID?: Maybe<Scalars['Int']>;
};

export type Document = {
  __typename?: 'Document';
  DocumentID: Scalars['Int'];
  Naam?: Maybe<Scalars['String']>;
  Locatie?: Maybe<Scalars['String']>;
  Omschrijving?: Maybe<Scalars['String']>;
};

export type ExamenInstelling = {
  __typename?: 'ExamenInstelling';
  ExamenInstellingID: Scalars['Int'];
  UniversiteitID: Scalars['Int'];
  ContactgegevensID: Scalars['Int'];
  Naam: Scalars['String'];
  IsBtwPlichtig: Scalars['Boolean'];
  IsActief: Scalars['Boolean'];
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ContactpersoonExamenInstelling?: Maybe<Array<Maybe<ContactpersoonExamenInstelling>>>;
};

export type ExamenVersie = {
  __typename?: 'ExamenVersie';
  ExamenVersieID: Scalars['Int'];
  ExamenType: Scalars['String'];
  ExamenVersieCode: Scalars['String'];
  ExamenOmschrijving: Scalars['String'];
  StartDatum?: Maybe<Scalars['Date']>;
  EindDatum?: Maybe<Scalars['Date']>;
  Documenten?: Maybe<Array<Maybe<ExamenVersieDocument>>>;
};

export type ExamenVersieDocument = {
  __typename?: 'ExamenVersieDocument';
  ExamenVersieDocumentID: Scalars['Int'];
  ExamenVersieID: Scalars['Int'];
  DocumentID: Scalars['Int'];
  AangemaaktDatum?: Maybe<Scalars['Date']>;
  AangemaaktDoor?: Maybe<Scalars['String']>;
  Document: Document;
};

export type Factuur = {
  __typename?: 'Factuur';
  FactuurID: Scalars['Int'];
  FactuurNummer: Scalars['String'];
  KenmerkJaarFactuurNummer?: Maybe<Scalars['String']>;
  CrediteurType: CrediteurTypeEnum;
  CrediteurID: Scalars['Int'];
  CrediteurContactgegevensID: Scalars['Int'];
  DebiteurType: DebiteurTypeEnum;
  DebiteurID: Scalars['Int'];
  DebiteurContactgegevensID: Scalars['Int'];
  ItemType: FactuurItemTypeEnum;
  ItemID: Scalars['Int'];
  Opmerkingen?: Maybe<Scalars['String']>;
  Datum: Scalars['Date'];
  Bedrag: Scalars['Float'];
  BtwBedrag: Scalars['Float'];
  DatumAangemaakt: Scalars['Date'];
  Kenmerk?: Maybe<Scalars['String']>;
  IsCreditFactuur?: Maybe<Scalars['Boolean']>;
  OrigineleFactuurID?: Maybe<Scalars['Int']>;
  Status: FactuurStatusEnum;
  invoiceLink?: Maybe<Scalars['String']>;
  FactuurRegels?: Maybe<Array<Maybe<FactuurRegel>>>;
  FactuurHistorie?: Maybe<Array<Maybe<FactuurHistorie>>>;
};

export type FactuurHistorie = {
  __typename?: 'FactuurHistorie';
  FactuurHistorieID: Scalars['Int'];
  FactuurID: Scalars['Int'];
  Status: FactuurStatusEnum;
  Opmerkingen: Scalars['String'];
  Datum: Scalars['Date'];
  DatumAangemaakt: Scalars['Date'];
  AangemaaktDoor?: Maybe<Scalars['String']>;
};

export type FactuurRegel = {
  __typename?: 'FactuurRegel';
  FactuurRegelID: Scalars['Int'];
  FactuurID: Scalars['Int'];
  CrediteurType: CrediteurTypeEnum;
  CrediteurID: Scalars['Int'];
  DebiteurType: DebiteurTypeEnum;
  DebiteurID: Scalars['Int'];
  ItemType: Scalars['String'];
  ItemID: Scalars['Int'];
  Datum: Scalars['Date'];
  Bedrag: Scalars['Float'];
  Omschrijving: Scalars['String'];
  ProductID: Scalars['Int'];
  BtwPercentage?: Maybe<Scalars['Float']>;
  DatumAangemaakt: Scalars['Date'];
};

export type Kennisgebied = {
  __typename?: 'Kennisgebied';
  KennisgebiedID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
};

export type Landen = {
  __typename?: 'Landen';
  Value: Scalars['String'];
  Text: Scalars['String'];
};

export type Locatie = {
  __typename?: 'Locatie';
  LocatieID: Scalars['Int'];
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  ContactgegevensID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
  Routebeschrijving: Scalars['String'];
  IsActief: Scalars['Boolean'];
  Contactgegevens: Contactgegevens;
};

export type Nationaliteit = {
  __typename?: 'Nationaliteit';
  Value: Scalars['String'];
  Text: Scalars['String'];
};

export type NormVersie = {
  __typename?: 'NormVersie';
  NormVersieID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Versienummer?: Maybe<Scalars['String']>;
  BeginDatum?: Maybe<Scalars['Date']>;
  EindDatum?: Maybe<Scalars['Date']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  Definitief?: Maybe<Scalars['Boolean']>;
};

export type Pas = {
  __typename?: 'Pas';
  PasID: Scalars['Int'];
  CertificeringID: Scalars['Int'];
  DatumAanvraag: Scalars['Date'];
  DatumUitgeleverd?: Maybe<Scalars['Date']>;
  Aantal: Scalars['Int'];
  Status: PasStatusEnum;
  BriefVerstuurd: Scalars['Boolean'];
  ContactgegevensID?: Maybe<Scalars['Int']>;
  Geadresseerde?: Maybe<Scalars['String']>;
  PasRetouren?: Maybe<Array<Maybe<PasRetour>>>;
};

export type PasRetour = {
  __typename?: 'PasRetour';
  PasRetourID: Scalars['Int'];
  PasID: Scalars['Int'];
  DatumRetour: Scalars['Date'];
  DatumAangemaakt: Scalars['Date'];
  AangemaaktDoor: Scalars['String'];
};

export type Persoon = {
  __typename?: 'Persoon';
  PersoonID: Scalars['Int'];
  BSN?: Maybe<Scalars['Int']>;
  Voorletters: Scalars['String'];
  Tussenvoegsel: Scalars['String'];
  Achternaam: Scalars['String'];
  Roepnaam: Scalars['String'];
  Geslacht: GeslachtEnum;
  Geboortedatum?: Maybe<Scalars['Date']>;
  Nationaliteit: Scalars['String'];
  Actief?: Maybe<Scalars['Boolean']>;
  IsGbaGeregistreerd?: Maybe<Scalars['Boolean']>;
  GbaNummer: Scalars['String'];
  GbaUpdate?: Maybe<Scalars['Date']>;
  /** Gets the contact data */
  Contactgegevens: Contactgegevens;
  /** Fetches all licenses */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  /** Name in format 'Achternaam, Voorletters [tussenvoegsel]' */
  SortableFullName?: Maybe<Scalars['String']>;
  /** Name in format 'Voorletters [tussenvoegsel] Achternaam */
  FullName?: Maybe<Scalars['String']>;
};


export type PersoonCertificeringenArgs = {
  alleenGeldig?: Maybe<Scalars['Boolean']>;
  perDatum?: Maybe<Scalars['Date']>;
};

export type Sessie = {
  __typename?: 'Sessie';
  SessieID: Scalars['Int'];
  CursusID: Scalars['Int'];
  LocatieID: Scalars['Int'];
  LocatieToevoeging: Scalars['String'];
  Datum: Scalars['Date'];
  Begintijd: Scalars['Date'];
  Eindtijd: Scalars['Date'];
  Docent: Scalars['String'];
  Opmerkingen: Scalars['String'];
  SessieType: Scalars['String'];
  NaamMonitor?: Maybe<Scalars['String']>;
  EmailMonitor?: Maybe<Scalars['String']>;
  WachtwoordMonitor?: Maybe<Scalars['String']>;
  ExamenVersieID?: Maybe<Scalars['Int']>;
  ExaminatorPersoonID?: Maybe<Scalars['Int']>;
  DigitaalExamenId?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  DatumBegintijd: Scalars['Date'];
  DatumEindtijd: Scalars['Date'];
  Locatie?: Maybe<Locatie>;
  Visitatie?: Maybe<Visitatie>;
  Cursus?: Maybe<Cursus>;
  ExamenVersie?: Maybe<ExamenVersie>;
  ExaminatorPersoon?: Maybe<Persoon>;
};

export type Studieresultaat = {
  __typename?: 'Studieresultaat';
  StudieresultaatID: Scalars['Int'];
  Datum?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  Certificering?: Maybe<Certificering>;
  Cursus: Cursus;
  Persoon: Persoon;
  Vak: Vak;
  NormVersie: NormVersie;
};

export type Thema = {
  __typename?: 'Thema';
  ThemaID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
  Code: Scalars['String'];
};

export type Vaardigheid = {
  __typename?: 'Vaardigheid';
  VaardigheidID: Scalars['Int'];
  Omschrijving: Scalars['String'];
  Code: Scalars['String'];
};

export type Vak = {
  __typename?: 'Vak';
  VakID: Scalars['Int'];
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  Afkorting?: Maybe<Scalars['String']>;
  Inhoud?: Maybe<Scalars['String']>;
  Code?: Maybe<Scalars['String']>;
  Doelgroep?: Maybe<Scalars['String']>;
  Doelstelling?: Maybe<Scalars['String']>;
  Samenhang?: Maybe<Scalars['String']>;
  Vernieuwend?: Maybe<Scalars['String']>;
  Samenvatting?: Maybe<Scalars['String']>;
  Docenten?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  Kosten?: Maybe<Scalars['Float']>;
  Tijdsduur?: Maybe<Scalars['String']>;
  Praktijk?: Maybe<Scalars['String']>;
  Werkvorm?: Maybe<Scalars['String']>;
  EvaluatieWijze?: Maybe<Scalars['String']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  Promotietekst?: Maybe<Scalars['String']>;
  GewijzigdDatum?: Maybe<Scalars['Date']>;
  DigitaalAanbod?: Maybe<Scalars['Boolean']>;
  MinimumDatum?: Maybe<Scalars['Date']>;
  MaximumDatum?: Maybe<Scalars['Date']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  NormVersieID: Scalars['Int'];
  IsExamenVak?: Maybe<Scalars['Boolean']>;
  ExamenType?: Maybe<VakExamenTypeEnum>;
  Competenties?: Maybe<Array<Maybe<Competentie>>>;
  Themas?: Maybe<Array<Maybe<Thema>>>;
  Vakgroep?: Maybe<Vakgroep>;
  Status?: Maybe<VakStatusEnum>;
  Website?: Maybe<Scalars['String']>;
  ExamenInstelling?: Maybe<ExamenInstelling>;
  Beoordelingen?: Maybe<Array<Maybe<Beoordeling>>>;
  VakVaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  VakKennisgebieden?: Maybe<Array<Maybe<Kennisgebied>>>;
  VakDiscussie?: Maybe<Array<Maybe<VakDiscussie>>>;
};

export type VakDiscussie = {
  __typename?: 'VakDiscussie';
  title?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};

export type Comment = {
  __typename?: 'Comment';
  title?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  dateOfComment?: Maybe<Scalars['Date']>;
  source?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

export type Vakgroep = {
  __typename?: 'Vakgroep';
  VakgroepID: Scalars['Int'];
  UniversiteitID: Scalars['Int'];
  ContactgegevensID: Scalars['Int'];
  Naam: Scalars['String'];
  Code: Scalars['String'];
  IsBtwPlichtig: Scalars['Boolean'];
  IsActief: Scalars['Boolean'];
  WebserviceEnabled: Scalars['Boolean'];
  ApiKey?: Maybe<Scalars['String']>;
  Contactgegevens: Contactgegevens;
};

export type Vaknorm = {
  __typename?: 'Vaknorm';
  VaknormID: Scalars['Int'];
  NormVersieID: Scalars['Int'];
  ThemaID: Scalars['Int'];
  CompetentieID: Scalars['Int'];
  MinimumPunten: Scalars['Int'];
  Vaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
};

export type VaknormVaardigheid = {
  __typename?: 'VaknormVaardigheid';
  VaknormVaardigheid: Scalars['Int'];
  VaardigheidID: Scalars['Int'];
  VaknormID: Scalars['Int'];
  Punten: Scalars['Int'];
  IsVerplicht: Scalars['Boolean'];
  Vaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
};

export type Visitatie = {
  __typename?: 'Visitatie';
  VisitatieID: Scalars['Int'];
  SessieID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Rapport?: Maybe<Scalars['String']>;
  RapportCijfer: Scalars['Int'];
  Status: VisitatieStatusEnum;
  DatumVisitatie?: Maybe<Scalars['Date']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  VolgensIntentieAanbod: Scalars['Boolean'];
};

export enum CursusDeelnameStatusEnum {
  Aangemeld = 'AANGEMELD',
  Aanwezig = 'AANWEZIG',
  Voorlopig = 'VOORLOPIG',
  Betaald = 'BETAALD',
  Afgemeld = 'AFGEMELD',
  Geregistreerd = 'GEREGISTREERD',
  Afgewezen = 'AFGEWEZEN',
  Geslaagd = 'GESLAAGD',
  Gezakt = 'GEZAKT',
  GeslaagdTheorieGezaktPraktijk = 'GESLAAGD_THEORIE_GEZAKT_PRAKTIJK',
  GeslaagdPraktijkGezaktTheorie = 'GESLAAGD_PRAKTIJK_GEZAKT_THEORIE'
}

export enum StudieresultaatStatusEnum {
  Voorlopig = 'VOORLOPIG',
  Betaald = 'BETAALD',
  Definitief = 'DEFINITIEF'
}

export enum CursusStatusEnum {
  Voorlopig = 'VOORLOPIG',
  Goedgekeurd = 'GOEDGEKEURD',
  Betaald = 'BETAALD',
  ExamenAangemeld = 'EXAMEN_AANGEMELD'
}

export enum GeslachtEnum {
  M = 'M',
  V = 'V',
  O = 'O'
}

export enum PasStatusEnum {
  Aangevraagd = 'AANGEVRAAGD',
  Betaald = 'BETAALD',
  UitTeLeveren = 'UIT_TE_LEVEREN',
  Uitgeleverd = 'UITGELEVERD',
  Error = 'ERROR'
}

export enum CrediteurTypeEnum {
  Universiteit = 'UNIVERSITEIT',
  Persoon = 'PERSOON'
}

export enum DebiteurTypeEnum {
  Vakgroep = 'VAKGROEP',
  Exameninstelling = 'EXAMENINSTELLING',
  Persoon = 'PERSOON',
  Universiteit = 'UNIVERSITEIT'
}

export enum FactuurStatusEnum {
  Aangemaakt = 'AANGEMAAKT',
  Betaald = 'BETAALD',
  GedeeltelijkBetaald = 'GEDEELTELIJK_BETAALD',
  OnjuistAangemaakt = 'ONJUIST_AANGEMAAKT',
  Afgehandeld = 'AFGEHANDELD',
  Oninbaar = 'ONINBAAR',
  Creditfactuur = 'CREDITFACTUUR'
}

export enum FactuurItemTypeEnum {
  ExamenAanmeldingen = 'EXAMEN_AANMELDINGEN',
  ExamenGeslaagdenRegistratie = 'EXAMEN_GESLAAGDEN_REGISTRATIE',
  Visitatie = 'VISITATIE',
  Duplicaat = 'DUPLICAAT'
}

export enum VakExamenTypeEnum {
  StartExamen = 'START_EXAMEN',
  HercertificeringsExamen = 'HERCERTIFICERINGS_EXAMEN'
}

export enum VakStatusEnum {
  Voorlopig = 'VOORLOPIG',
  Ingediend = 'INGEDIEND',
  InOntwerp = 'IN_ONTWERP',
  Goedgekeurd = 'GOEDGEKEURD',
  Afgekeurd = 'AFGEKEURD',
  Ingetrokken = 'INGETROKKEN',
  WordtBeoordeeld = 'WORDT_BEOORDEELD'
}

export enum CertificeringStatusEnum {
  Geldig = 'GELDIG',
  Verlopen = 'VERLOPEN',
  Ingetrokken = 'INGETROKKEN',
  Ingenomen = 'INGENOMEN'
}

export enum SessieTypeEnum {
  Theorie = 'THEORIE',
  Praktijk = 'PRAKTIJK',
  Examen = 'EXAMEN'
}

export enum ExamenTypeEnum {
  DigitaalExamen = 'DIGITAAL_EXAMEN',
  PapierenExamen = 'PAPIEREN_EXAMEN'
}

export enum VisitatieStatusEnum {
  Ingepland = 'INGEPLAND',
  Ingediend = 'INGEDIEND'
}

export enum VakTypeEnum {
  Bijeenkomst = 'BIJEENKOMST',
  Examen = 'EXAMEN'
}

export enum BeoordelingStatusEnum {
  TerBeoordeling = 'TER_BEOORDELING',
  Afgekeurd = 'AFGEKEURD',
  Goedgekeurd = 'GOEDGEKEURD'
}

export type Query = {
  __typename?: 'Query';
  Certificaten?: Maybe<Array<Maybe<Certificaat>>>;
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  Competenties: Array<Maybe<Competentie>>;
  Contactgegevens?: Maybe<Contactgegevens>;
  CursusSessies?: Maybe<Array<Maybe<CursusSessie>>>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  ExamenInstellingen: Array<Maybe<ExamenInstelling>>;
  ExamDetails?: Maybe<Exam>;
  ExamsForResultsRegistration?: Maybe<CursusNodes>;
  Exams?: Maybe<CursusNodes>;
  ExamSpecialties?: Maybe<Array<Maybe<Vak>>>;
  ExamSpecialty?: Maybe<ExamSpecialty>;
  SearchExamVersions?: Maybe<Array<Maybe<ExamenVersie>>>;
  ExamVersionDocuments?: Maybe<ExamenVersie>;
  getInspectionPlanning?: Maybe<InspectionResult>;
  getInspectors?: Maybe<Array<Maybe<Inspector>>>;
  /**
   * Get invoices.
   * Optionally filter by status. And apply pagination with pageSize, pageNumber and orderBy (default: createdOn, DESC)
   */
  invoices: InvoiceNodes;
  invoicesByExamId?: Maybe<Array<Maybe<Factuur>>>;
  Kennisgebieden: Array<Maybe<Kennisgebied>>;
  Landen: Array<Maybe<Landen>>;
  SearchLocations?: Maybe<Array<Maybe<Locatie>>>;
  /** Fetches data of the current logged in person */
  my?: Maybe<My>;
  Nationaliteiten: Array<Maybe<Nationaliteit>>;
  SearchOrganizers?: Maybe<Array<Maybe<SearchOrganizerResult>>>;
  Persoon?: Maybe<Persoon>;
  PersoonZoeken?: Maybe<Persoon>;
  Examinatoren?: Maybe<Array<Maybe<Persoon>>>;
  Sessie?: Maybe<Sessie>;
  Specialties?: Maybe<Array<Maybe<Vak>>>;
  Specialty?: Maybe<Vak>;
  Studieresultaten: Array<Maybe<Studieresultaat>>;
  tariefDuplicaat?: Maybe<TotaalExtBtwTarief>;
  Themas: Array<Maybe<Thema>>;
  uploads?: Maybe<Array<Maybe<File>>>;
};


export type QueryCertificatenArgs = {
  idList?: Maybe<Array<Scalars['Int']>>;
};


export type QueryCertificeringenArgs = {
  personId: Scalars['Int'];
};


export type QueryContactgegevensArgs = {
  ContactgegevensID: Scalars['Int'];
};


export type QueryCursusSessiesArgs = {
  input: SearchCourseSessionsInput;
};


export type QueryCursusDeelnamesArgs = {
  cursusId: Scalars['Int'];
};


export type QueryExamenInstellingenArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
  findById?: Maybe<Scalars['Int']>;
};


export type QueryExamDetailsArgs = {
  input: SearchExamInput;
};


export type QueryExamsForResultsRegistrationArgs = {
  input: SearchExamsForResultsRegistrationInput;
};


export type QueryExamsArgs = {
  input: ExamsInput;
};


export type QueryExamSpecialtyArgs = {
  vakId: Scalars['Int'];
};


export type QuerySearchExamVersionsArgs = {
  input: SearchExamVersionsInput;
};


export type QueryExamVersionDocumentsArgs = {
  input: ExamVersionDocumentsInput;
};


export type QueryGetInspectionPlanningArgs = {
  input: GetInspectionPlanningInput;
};


export type QueryInvoicesArgs = {
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  orderBy?: Maybe<OrderByArgs>;
  filterInvoices?: Maybe<FilterInvoicesInput>;
};


export type QueryInvoicesByExamIdArgs = {
  examId: Scalars['Int'];
};


export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
};


export type QueryPersoonArgs = {
  PersoonID: Scalars['Int'];
};


export type QueryPersoonZoekenArgs = {
  PersoonID?: Maybe<Scalars['Int']>;
  Geboortedatum?: Maybe<Scalars['Date']>;
  Achternaam?: Maybe<Scalars['SafeString']>;
};


export type QuerySessieArgs = {
  sessieId: Scalars['Int'];
};


export type QuerySpecialtiesArgs = {
  input: SpecialtiesInput;
};


export type QuerySpecialtyArgs = {
  vakId: Scalars['Int'];
  fullDetails?: Maybe<Scalars['Boolean']>;
};


export type QueryStudieresultatenArgs = {
  PersoonID: Scalars['Int'];
};

export type AangemeldeCursusDeelname = {
  __typename?: 'AangemeldeCursusDeelname';
  CursusDeelnameID: Scalars['Int'];
  CursusID: Scalars['Int'];
  Titel: Scalars['String'];
  Datum: Scalars['Date'];
  Begintijd: Scalars['String'];
  Eindtijd: Scalars['String'];
  Prijs: Scalars['Float'];
  Locatie: Scalars['String'];
  Status: Scalars['String'];
  IsDigitaalAanbod: Scalars['Boolean'];
};

export type CursusSessie = {
  __typename?: 'CursusSessie';
  CourseId: Scalars['Int'];
  SpecialtyId: Scalars['Int'];
  CourseCode: Scalars['String'];
  Title: Scalars['String'];
  Date: Scalars['Date'];
  StartTime: Scalars['String'];
  EndTime: Scalars['String'];
  Price: Scalars['Float'];
  LocationName: Scalars['String'];
  LocationAddress?: Maybe<LocationAddress>;
  Distance?: Maybe<Scalars['Int']>;
  Competence: Scalars['String'];
  Theme: Scalars['String'];
  Organizer: Scalars['String'];
  OrganizerEmail?: Maybe<Scalars['String']>;
  OrganizerPhone?: Maybe<Scalars['String']>;
  OrganizerWebsite?: Maybe<Scalars['String']>;
  PromoText?: Maybe<Scalars['String']>;
  Registered: Scalars['Boolean'];
  RegisteredDate?: Maybe<Scalars['Date']>;
  CanUnRegister: Scalars['Boolean'];
};

export type LocationAddress = {
  __typename?: 'LocationAddress';
  Street: Scalars['String'];
  HouseNr: Scalars['String'];
  HouseNrExtension?: Maybe<Scalars['String']>;
  Zipcode?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
};

export type SearchCourseSessionsInput = {
  /** Current course (to search others) */
  currentCourseId?: Maybe<Scalars['Int']>;
  /** KnowledgeAreaId to filter on */
  knowledgeAreaId?: Maybe<Scalars['Int']>;
  /** ThemeId to filter on */
  themeId?: Maybe<Scalars['Int']>;
  /** CompetenceId to filter on */
  competenceId?: Maybe<Scalars['Int']>;
  /** Date range, from */
  from?: Maybe<Scalars['Date']>;
  /** Date range, to */
  to?: Maybe<Scalars['Date']>;
  /** Is search for online courses only (default = false) */
  isOnlineCourse: Scalars['Boolean'];
  /** Zipcode, numbers only */
  zipcodeNumbers?: Maybe<Scalars['Int']>;
  /** Radius in Kilometers */
  distanceRadius?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  RegisterExamResults?: Maybe<Scalars['String']>;
  /** The `requestDuplicate` can be used to request a license card duplicate */
  requestDuplicate: RequestDuplicateResult;
  saveExam?: Maybe<Cursus>;
  exportCards: ExportCardsResult;
  updatePlanning: UpdatePlanningResult;
  updateInvoiceStatus: UpdateInvoiceStatusResult;
  createInvoiceCollection: CreateInvoiceCollectionResult;
  /** Create or update a location */
  saveLocation: Locatie;
  singleUpload: File;
  multipleUpload: Array<File>;
  multiUpload: MultiUploadResult;
};


export type MutationRegisterExamResultsArgs = {
  input: Array<Maybe<RegisterExamResultsInput>>;
};


export type MutationRequestDuplicateArgs = {
  input: RequestDuplicateInput;
};


export type MutationSaveExamArgs = {
  input: SaveExamInput;
};


export type MutationExportCardsArgs = {
  sendToBatchMailer?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdatePlanningArgs = {
  sessieId: Scalars['Int'];
  inspectorId: Scalars['Int'];
  visitDate: Scalars['Date'];
};


export type MutationUpdateInvoiceStatusArgs = {
  input: UpdateInvoiceStatusInput;
};


export type MutationCreateInvoiceCollectionArgs = {
  input: CreateInvoiceCollectionInput;
};


export type MutationSaveLocationArgs = {
  input: SaveLocationInput;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationMultiUploadArgs = {
  file1: Scalars['Upload'];
  file2: Scalars['Upload'];
};

export type RegisterExamResultsInput = {
  CursusDeelnameID: Scalars['Int'];
  Status: CursusDeelnameStatusEnum;
  CertificaatID: Scalars['Int'];
};

export type RequestDuplicateInput = {
  /** Licenses which should be duplicated */
  licenseIds: Array<Maybe<Scalars['Int']>>;
  /** Remark for invoice (required for anything other than KBA) */
  remark?: Maybe<Scalars['String']>;
  /** Nr of cards */
  count?: Maybe<Scalars['Int']>;
};

export type RequestDuplicateResult = {
  __typename?: 'requestDuplicateResult';
  /**
   * The link to the invoice in format
   * window.open('iDeal/Factuur.aspx?SafeKey=ZR6HXPxJ00YCgPIvrf3ciG00iwRcs0FDOXkJ6S9AYiOnRSYChcmsCc+/DyH1KeCh1ZL95PyapQQxIqFviIvWpWZjgR77CTAvsd1k/DFhQb5VXOx7SoHu+I0+NQiOpn1nTkeXHTYqsmggI81XDjnLowbb5qmDhynQpJqCMerD5iw=','FactuurVenster','left=100,top=50,width=700,height=800,location=0,resizable=1,toolbar=1')
   */
  invoiceLink?: Maybe<Scalars['String']>;
  /** One or multiple passes (1 for each license) */
  cards?: Maybe<Array<Maybe<Pas>>>;
};

export type SearchExamInput = {
  examId: Scalars['Int'];
};

export type SearchExamsForResultsRegistrationInput = {
  examenInstellingId: Scalars['Int'];
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  orderBy: OrderByArgs;
};

export type ExamsInput = {
  /** Filter on part of exam code */
  examCode?: Maybe<Scalars['SafeString']>;
  /** Filter on part of title */
  title?: Maybe<Scalars['SafeString']>;
  /** Date range, from */
  from?: Maybe<Scalars['Date']>;
  /** Date range, to */
  to?: Maybe<Scalars['Date']>;
  /** Filter on LocatieID */
  locationId?: Maybe<Scalars['Int']>;
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  orderBy: OrderByArgs;
};

export type SaveExamInput = {
  CursusID?: Maybe<Scalars['Int']>;
  SessieID?: Maybe<Scalars['Int']>;
  VakID: Scalars['Int'];
  LocatieID: Scalars['Int'];
  ExaminatorPersoonID: Scalars['Int'];
  ExamenVersieID: Scalars['Int'];
  Titel: Scalars['SafeString'];
  Promotietekst: Scalars['SafeString'];
  Prijs: Scalars['Float'];
  MaximumCursisten: Scalars['Int'];
  IsBesloten: Scalars['Boolean'];
  Opmerkingen?: Maybe<Scalars['SafeString']>;
  Datum: Scalars['Date'];
  Begintijd: Scalars['Date'];
  Eindtijd: Scalars['Date'];
};

export type Exam = {
  __typename?: 'Exam';
  Cursus?: Maybe<Cursus>;
  Vaknorm?: Maybe<Vaknorm>;
};

export type CursusNodes = {
  __typename?: 'CursusNodes';
  totalCount: Scalars['Int'];
  nodes?: Maybe<Array<Maybe<Cursus>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ExamSpecialty = {
  __typename?: 'ExamSpecialty';
  Vak?: Maybe<Vak>;
  Vaknorm?: Maybe<Vaknorm>;
};

export type SearchExamVersionsInput = {
  VakID?: Maybe<Scalars['Int']>;
  ExamDate?: Maybe<Scalars['Date']>;
};

export type ExamVersionDocumentsInput = {
  ExamenVersieID: Scalars['Int'];
};

export type ExportCardsResult = {
  __typename?: 'exportCardsResult';
  fileName: Scalars['String'];
  result: Scalars['String'];
};

export type UpdatePlanningResult = {
  __typename?: 'UpdatePlanningResult';
  planned: Scalars['Boolean'];
};

export type Inspector = {
  __typename?: 'Inspector';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type InspectionResult = {
  __typename?: 'InspectionResult';
  PlanningData: Array<Maybe<InspectionPlanningData>>;
  /** StatisticsPerSpecialty: [StatisticsPerSpecialty] */
  StatisticsPerOrganizer?: Maybe<Array<Maybe<StatisticsPerOrganizer>>>;
  InspectionStatisticsOverall?: Maybe<VisitingData>;
};

export type InspectionPlanningData = {
  __typename?: 'InspectionPlanningData';
  SessieData: PlanningData;
  OrganizerTargetActual: Scalars['Float'];
  SpecialtyTargetActual: Scalars['Float'];
  NrOfDaysSinceLastVisit?: Maybe<Scalars['Int']>;
  ShouldBeVisited: Scalars['Boolean'];
};

export type PlanningData = {
  __typename?: 'PlanningData';
  InstellingID: Scalars['Int'];
  InstellingNaam: Scalars['String'];
  VakType: Scalars['String'];
  VakID: Scalars['Int'];
  CursusID: Scalars['Int'];
  CursusCode?: Maybe<Scalars['Int']>;
  CursusStatus?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  BeginDatum: Scalars['Date'];
  SessieID: Scalars['Int'];
  LocatieID?: Maybe<Scalars['Int']>;
  LocatieToevoeging?: Maybe<Scalars['String']>;
  Naam?: Maybe<Scalars['String']>;
  Woonplaats?: Maybe<Scalars['String']>;
  Begintijd?: Maybe<Scalars['String']>;
  BeginDatumTijd?: Maybe<Scalars['Date']>;
  Eindtijd?: Maybe<Scalars['String']>;
  SessieType?: Maybe<Scalars['String']>;
  VisitatieID?: Maybe<Scalars['Int']>;
  PersoonID?: Maybe<Scalars['Int']>;
  Rapportcijfer?: Maybe<Scalars['Int']>;
  VisitatieStatus?: Maybe<Scalars['String']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  DatumVisitatie?: Maybe<Scalars['Date']>;
  VolgensIntentieAanbod?: Maybe<Scalars['Boolean']>;
};

export type StatisticsPerSpecialty = {
  __typename?: 'StatisticsPerSpecialty';
  VakID: Scalars['Int'];
  Title: Scalars['String'];
  VakType: Scalars['String'];
  VisitingData?: Maybe<VisitingData>;
};

export type StatisticsPerOrganizer = {
  __typename?: 'StatisticsPerOrganizer';
  OrganizerId: Scalars['Int'];
  OrganizerName: Scalars['String'];
  OrganizerType: Scalars['String'];
  VisitingData?: Maybe<VisitingData>;
  SpecialtyStatistics?: Maybe<Array<Maybe<StatisticsPerSpecialty>>>;
};

export type VisitingData = {
  __typename?: 'VisitingData';
  NrOfCourses: Scalars['Int'];
  AverageRate?: Maybe<Scalars['Float']>;
  NrOfVisits: Scalars['Int'];
  VisitTargetActual: Scalars['Float'];
  VisitTarget: Scalars['Float'];
  AverageScoreAccordingIntention?: Maybe<Scalars['Float']>;
  LastVisitData?: Maybe<LastVisitData>;
};

export type LastVisitData = {
  __typename?: 'LastVisitData';
  VisitedDate?: Maybe<Scalars['Date']>;
  InspectorId?: Maybe<Scalars['Int']>;
  ReportGrade?: Maybe<Scalars['Float']>;
  ReportCreatedDate?: Maybe<Scalars['Date']>;
  AccordingIntention?: Maybe<Scalars['Boolean']>;
};

export type GetInspectionPlanningInput = {
  startDate: Scalars['Date'];
  showStatsForPeriod: Scalars['Boolean'];
  shouldOnlyBePlanned: Scalars['Boolean'];
  plannable: Scalars['Boolean'];
  targetSettings: TargetSettings;
  isInspector: Scalars['Boolean'];
  isRector: Scalars['Boolean'];
};

export type TargetSettings = {
  specialtyTarget: Scalars['Float'];
  specialtyMargin: Scalars['Float'];
  organizerTarget: Scalars['Float'];
  organizerMargin: Scalars['Float'];
  overallTarget: Scalars['Float'];
  overallMargin: Scalars['Float'];
};

export type CreateInvoiceCollectionInput = {
  invoiceIds?: Maybe<Array<Scalars['Int']>>;
};

export type CreateInvoiceCollectionResult = {
  __typename?: 'CreateInvoiceCollectionResult';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  invoiceCollectionId?: Maybe<Scalars['Int']>;
};

export type UpdateInvoiceStatusInput = {
  invoiceId: Scalars['Int'];
  isInvoiceCollection: Scalars['Boolean'];
  status: FactuurStatusEnum;
  actionDate: Scalars['Date'];
  remarks?: Maybe<Scalars['SafeString']>;
};

export type UpdateInvoiceStatusResult = {
  __typename?: 'UpdateInvoiceStatusResult';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

/** , orderBy: OrderByArgs */
export type FilterInvoicesInput = {
  PaymentStatus?: Maybe<PaymentStatusEnum>;
  FactuurNummer?: Maybe<Scalars['SafeString']>;
  FromDate?: Maybe<Scalars['Date']>;
  ToDate?: Maybe<Scalars['Date']>;
  CursusCode?: Maybe<Scalars['SafeString']>;
  InvoiceCollectionFilter?: Maybe<InvoiceCollectionsFilterEnum>;
  ForReviewersOnly?: Maybe<Scalars['Boolean']>;
  DebiteurType?: Maybe<DebiteurTypeEnum>;
  DebiteurID?: Maybe<Scalars['Int']>;
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  InvoiceStatusFilterList?: Maybe<Array<Maybe<Scalars['String']>>>;
  CrediteurType?: Maybe<CrediteurTypeEnum>;
  CrediteurID?: Maybe<Scalars['Int']>;
};

export enum InvoiceCollectionsFilterEnum {
  Both = 'BOTH',
  InvoiceCollections = 'INVOICE_COLLECTIONS',
  NormalInvoices = 'NORMAL_INVOICES'
}

export enum PaymentStatusEnum {
  All = 'ALL',
  NotPaid = 'NOT_PAID',
  Paid = 'PAID'
}

export type OrderByArgs = {
  /** The field to order by */
  field: Scalars['String'];
  /** The sort direction */
  sortDirection: SortDirectionEnum;
};

export type InvoiceNodes = {
  __typename?: 'InvoiceNodes';
  /** Total nr of emails */
  totalCount: Scalars['Int'];
  /** The email objects */
  nodes?: Maybe<Array<Maybe<Invoice>>>;
  /** Page info */
  pageInfo?: Maybe<PageInfo>;
};

export type Invoice = {
  __typename?: 'Invoice';
  FactuurID: Scalars['Int'];
  FactuurNummer: Scalars['String'];
  CursusCode: Scalars['String'];
  KenmerkJaarFactuurNummer: Scalars['String'];
  FactuurStatus: Scalars['String'];
  StatusOpmerkingen?: Maybe<Scalars['String']>;
  FactuurJaar: Scalars['Int'];
  IsBetaald: Scalars['Boolean'];
  FactuurDatum: Scalars['Date'];
  BedragExBtw: Scalars['Float'];
  BedragIncBtw: Scalars['Float'];
  BtwBedrag: Scalars['Float'];
  ProductCode: Scalars['String'];
  ItemType: Scalars['String'];
  DebiteurID: Scalars['Int'];
  DebiteurType: DebiteurTypeEnum;
  DebiteurNaam: Scalars['String'];
  CrediteurID: Scalars['Int'];
  CrediteurType: CrediteurTypeEnum;
  InVerzamelfactuur: Scalars['Int'];
  VerzamelFactuurID: Scalars['Int'];
  VerzamelFactuurBedrag: Scalars['Float'];
  VerzamelFactuurBTWBedrag: Scalars['Float'];
  VerzamelFactuurDatum?: Maybe<Scalars['Date']>;
  VerzamelFactuurOpmerking?: Maybe<Scalars['String']>;
  VerzamelFactuurIsBetaald: Scalars['Boolean'];
  VerzamelFactuurDatumBetaald?: Maybe<Scalars['Date']>;
  InvoiceLink: Scalars['String'];
  Kenmerk?: Maybe<Scalars['String']>;
  IsCreditFactuur?: Maybe<Scalars['Boolean']>;
  OrigineleFactuurID?: Maybe<Scalars['Int']>;
  OrigineleFactuurNummer?: Maybe<Scalars['Int']>;
  OrigineleInvoiceLink?: Maybe<Scalars['String']>;
  CreditFactuurID?: Maybe<Scalars['Int']>;
  CreditFactuurNummer?: Maybe<Scalars['Int']>;
  CreditInvoiceLink?: Maybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SaveLocationInput = {
  LocatieID?: Maybe<Scalars['Int']>;
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  ContactgegevensID?: Maybe<Scalars['Int']>;
  Naam: Scalars['SafeString'];
  Routebeschrijving?: Maybe<Scalars['SafeString']>;
  IsActief: Scalars['Boolean'];
  Contactgegevens?: Maybe<ContactgegevensInput>;
};

export type ContactgegevensInput = {
  Adresregel1: Scalars['SafeString'];
  Huisnummer: Scalars['SafeString'];
  HuisnummerToevoeging?: Maybe<Scalars['SafeString']>;
  Postcode: Scalars['SafeString'];
  Woonplaats: Scalars['SafeString'];
  Land: Scalars['SafeString'];
  Email?: Maybe<Scalars['SafeString']>;
  Telefoon?: Maybe<Scalars['SafeString']>;
  Website?: Maybe<Scalars['SafeString']>;
};

export type SearchLocationsInput = {
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
};

export type My = {
  __typename?: 'My';
  Persoon: Persoon;
  Roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Fetches only current licenses when 'alleenGeldig' is true.
   * When false (default), fetches all licenses.
   * 'perDatum' sets the date that the licenses should be valid (default today)
   */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  /** Link to vakgroep(en), via Hoogleraar table */
  VakgroepLinks?: Maybe<Array<Maybe<VakgroepLink>>>;
  /** Link to exameninstelling(en), via ContactpersoonExamenInstelling table */
  ExamenInstellingLinks?: Maybe<Array<Maybe<ExamenInstellingLink>>>;
};


export type MyCertificeringenArgs = {
  alleenGeldig?: Maybe<Scalars['Boolean']>;
  perDatum?: Maybe<Scalars['Date']>;
  inclusiefPassen?: Maybe<Scalars['Boolean']>;
};


export type MyVakgroepLinksArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
};


export type MyExamenInstellingLinksArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
};

export type VakgroepLink = {
  __typename?: 'VakgroepLink';
  HoogleraarID: Scalars['Int'];
  VakgroepID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Actief: Scalars['Boolean'];
  Vakgroep?: Maybe<Vakgroep>;
};

export type ExamenInstellingLink = {
  __typename?: 'ExamenInstellingLink';
  ContactpersoonExamenInstellingID: Scalars['Int'];
  ExamenInstellingID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Actief: Scalars['Boolean'];
  ExamenInstelling?: Maybe<ExamenInstelling>;
};

export type SearchOrganizerResult = {
  __typename?: 'SearchOrganizerResult';
  ExamenInstellingID: Scalars['Int'];
  Naam?: Maybe<Scalars['String']>;
};

export type CreatePersonByPersonData = {
  /** Max 50 chars */
  Voorletters: Scalars['String'];
  /** Max 50 chars */
  Tussenvoegsel?: Maybe<Scalars['String']>;
  /** Max 50 chars */
  Achternaam: Scalars['String'];
  /** Can only be 'o', 'm, 'v' */
  Geslacht: GeslachtEnum;
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
  /** Use Nationaliteiten endpoint */
  Nationaliteit: Scalars['String'];
  /** Max 100 chars */
  Adresregel1: Scalars['String'];
  /** Max 100 chars */
  Adresregel2?: Maybe<Scalars['String']>;
  /** Max 20 chars */
  Huisnummer: Scalars['Int'];
  /** Max 20 chars */
  HuisnummerToevoeging?: Maybe<Scalars['String']>;
  /** Max 20 chars */
  Postcode: Scalars['String'];
  /** Max 100 chars */
  Woonplaats: Scalars['String'];
  /** Use Landen endpoint */
  Land: Scalars['String'];
  /** Email address is required */
  Email: Scalars['String'];
};

export type CreatePersonByBsn = {
  /** BSN can be 8 or 9 digits long */
  BSN: Scalars['Int'];
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
  /** Email address is required */
  Email: Scalars['String'];
};

export type BasicPersonData = {
  PersoonID: Scalars['Int'];
  Email?: Maybe<Scalars['String']>;
};

export type SpecialtiesInput = {
  /** ExamenInstellingID to filter on organizers */
  examenInstellingId: Scalars['Int'];
  validOnly?: Maybe<Scalars['Boolean']>;
};

export type TotaalExtBtwTarief = {
  __typename?: 'TotaalExtBtwTarief';
  TotaalExtBtw?: Maybe<Scalars['Float']>;
};


export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  path: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};

export type MultiUploadResult = {
  __typename?: 'MultiUploadResult';
  result: Scalars['String'];
};

export type GetMyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyQuery = (
  { __typename?: 'Query' }
  & { my?: Maybe<(
    { __typename?: 'My' }
    & Pick<My, 'Roles'>
    & { Persoon: (
      { __typename?: 'Persoon' }
      & Pick<Persoon, 'PersoonID'>
    ) }
  )> }
);

export type SearchLocationsQueryVariables = Exact<{
  ExamenInstellingID: Scalars['Int'];
}>;


export type SearchLocationsQuery = (
  { __typename?: 'Query' }
  & { SearchLocations?: Maybe<Array<Maybe<(
    { __typename?: 'Locatie' }
    & Pick<Locatie, 'LocatieID' | 'Naam'>
    & { Contactgegevens: (
      { __typename?: 'Contactgegevens' }
      & Pick<Contactgegevens, 'Woonplaats'>
    ) }
  )>>> }
);

export type SearchOrganizersQueryVariables = Exact<{ [key: string]: never; }>;


export type SearchOrganizersQuery = (
  { __typename?: 'Query' }
  & { SearchOrganizers?: Maybe<Array<Maybe<(
    { __typename?: 'SearchOrganizerResult' }
    & { Text: SearchOrganizerResult['Naam'], Value: SearchOrganizerResult['ExamenInstellingID'] }
  )>>> }
);

export type SpecialtiesQueryVariables = Exact<{
  examenInstellingId: Scalars['Int'];
}>;


export type SpecialtiesQuery = (
  { __typename?: 'Query' }
  & { Specialties?: Maybe<Array<Maybe<(
    { __typename?: 'Vak' }
    & Pick<Vak, 'VakID' | 'Afkorting' | 'Code' | 'Titel' | 'Kosten' | 'MinimumDatum' | 'MaximumDatum' | 'Promotietekst'>
    & { Competenties?: Maybe<Array<Maybe<(
      { __typename?: 'Competentie' }
      & Pick<Competentie, 'Naam' | 'Code'>
    )>>>, Themas?: Maybe<Array<Maybe<(
      { __typename?: 'Thema' }
      & Pick<Thema, 'Naam' | 'Code'>
    )>>> }
  )>>> }
);

export type SpecialtyQueryVariables = Exact<{
  vakId: Scalars['Int'];
}>;


export type SpecialtyQuery = (
  { __typename?: 'Query' }
  & { Specialty?: Maybe<(
    { __typename?: 'Vak' }
    & Pick<Vak, 'VakID' | 'ExamenInstellingID' | 'Code' | 'Titel' | 'Promotietekst' | 'Kosten' | 'MinimumDatum' | 'MaximumDatum' | 'MaximumCursisten'>
  )> }
);

export type ExamsQueryVariables = Exact<{
  input: ExamsInput;
}>;


export type ExamsQuery = (
  { __typename?: 'Query' }
  & { Exams?: Maybe<(
    { __typename?: 'CursusNodes' }
    & Pick<CursusNodes, 'totalCount'>
    & { pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage'>
    )>, nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Cursus' }
      & Pick<Cursus, 'CursusID' | 'VakID' | 'Titel' | 'CursusCode' | 'IsBesloten'>
      & { Sessies?: Maybe<Array<Maybe<(
        { __typename?: 'Sessie' }
        & Pick<Sessie, 'SessieID' | 'Datum'>
        & { Locatie?: Maybe<(
          { __typename?: 'Locatie' }
          & Pick<Locatie, 'LocatieID' | 'Naam'>
          & { Contactgegevens: (
            { __typename?: 'Contactgegevens' }
            & Pick<Contactgegevens, 'ContactgegevensID' | 'Woonplaats'>
          ) }
        )> }
      )>>>, CursusDeelnames?: Maybe<Array<Maybe<(
        { __typename?: 'CursusDeelname' }
        & Pick<CursusDeelname, 'Status'>
      )>>> }
    )>>> }
  )> }
);

export type ExamDetailsQueryVariables = Exact<{
  input: SearchExamInput;
}>;


export type ExamDetailsQuery = (
  { __typename?: 'Query' }
  & { ExamDetails?: Maybe<(
    { __typename?: 'Exam' }
    & { Cursus?: Maybe<(
      { __typename?: 'Cursus' }
      & Pick<Cursus, 'CursusID' | 'VakID' | 'CursusleiderID' | 'Prijs' | 'Titel' | 'Promotietekst' | 'IsBesloten' | 'MaximumCursisten' | 'Opmerkingen' | 'Status' | 'CursusCode' | 'DatumAangemaakt' | 'DatumGewijzigd' | 'PersoonIDAangemaakt' | 'PersoonIDGewijzigd'>
      & { Vak: (
        { __typename?: 'Vak' }
        & Pick<Vak, 'VakID' | 'MinimumDatum' | 'MaximumDatum' | 'ExamenInstellingID'>
        & { ExamenInstelling?: Maybe<(
          { __typename?: 'ExamenInstelling' }
          & Pick<ExamenInstelling, 'Naam'>
          & { Contactgegevens: (
            { __typename?: 'Contactgegevens' }
            & Pick<Contactgegevens, 'Adresregel1' | 'Huisnummer' | 'HuisnummerToevoeging' | 'Woonplaats' | 'Telefoon' | 'Email'>
          ), ContactpersoonExamenInstelling?: Maybe<Array<Maybe<(
            { __typename?: 'ContactpersoonExamenInstelling' }
            & { Persoon: (
              { __typename?: 'Persoon' }
              & Pick<Persoon, 'SortableFullName'>
            ) }
          )>>> }
        )> }
      ), Sessies?: Maybe<Array<Maybe<(
        { __typename?: 'Sessie' }
        & Pick<Sessie, 'SessieID' | 'Datum' | 'Begintijd' | 'Eindtijd' | 'Opmerkingen'>
        & { ExaminatorPersoon?: Maybe<(
          { __typename?: 'Persoon' }
          & Pick<Persoon, 'PersoonID' | 'SortableFullName'>
        )>, ExamenVersie?: Maybe<(
          { __typename?: 'ExamenVersie' }
          & Pick<ExamenVersie, 'ExamenVersieID' | 'ExamenType' | 'ExamenVersieCode' | 'ExamenOmschrijving' | 'StartDatum' | 'EindDatum'>
          & { Documenten?: Maybe<Array<Maybe<(
            { __typename?: 'ExamenVersieDocument' }
            & Pick<ExamenVersieDocument, 'ExamenVersieDocumentID' | 'AangemaaktDatum' | 'AangemaaktDoor'>
            & { Document: (
              { __typename?: 'Document' }
              & Pick<Document, 'DocumentID' | 'Naam' | 'Locatie' | 'Omschrijving'>
            ) }
          )>>> }
        )>, Locatie?: Maybe<(
          { __typename?: 'Locatie' }
          & Pick<Locatie, 'LocatieID' | 'Naam'>
          & { Contactgegevens: (
            { __typename?: 'Contactgegevens' }
            & Pick<Contactgegevens, 'ContactgegevensID' | 'Woonplaats'>
          ) }
        )> }
      )>>>, CursusDeelnames?: Maybe<Array<Maybe<(
        { __typename?: 'CursusDeelname' }
        & Pick<CursusDeelname, 'Status'>
        & { Persoon: (
          { __typename?: 'Persoon' }
          & Pick<Persoon, 'PersoonID' | 'SortableFullName'>
        ) }
      )>>> }
    )> }
  )> }
);

export type ExaminersQueryVariables = Exact<{ [key: string]: never; }>;


export type ExaminersQuery = (
  { __typename?: 'Query' }
  & { Examinatoren?: Maybe<Array<Maybe<(
    { __typename?: 'Persoon' }
    & Pick<Persoon, 'PersoonID' | 'SortableFullName'>
    & { Contactgegevens: (
      { __typename?: 'Contactgegevens' }
      & Pick<Contactgegevens, 'Woonplaats'>
    ) }
  )>>> }
);

export type SearchExamVersionsQueryVariables = Exact<{
  input: SearchExamVersionsInput;
}>;


export type SearchExamVersionsQuery = (
  { __typename?: 'Query' }
  & { SearchExamVersions?: Maybe<Array<Maybe<(
    { __typename?: 'ExamenVersie' }
    & { Value: ExamenVersie['ExamenVersieID'], Text: ExamenVersie['ExamenOmschrijving'] }
  )>>> }
);

export type ExamVersionDocumentsQueryVariables = Exact<{
  input: ExamVersionDocumentsInput;
}>;


export type ExamVersionDocumentsQuery = (
  { __typename?: 'Query' }
  & { ExamVersionDocuments?: Maybe<(
    { __typename?: 'ExamenVersie' }
    & Pick<ExamenVersie, 'ExamenVersieCode' | 'ExamenOmschrijving' | 'StartDatum' | 'EindDatum'>
    & { Documenten?: Maybe<Array<Maybe<(
      { __typename?: 'ExamenVersieDocument' }
      & Pick<ExamenVersieDocument, 'AangemaaktDoor' | 'AangemaaktDatum'>
      & { Document: (
        { __typename?: 'Document' }
        & Pick<Document, 'DocumentID' | 'Naam' | 'Locatie' | 'Omschrijving'>
      ) }
    )>>> }
  )> }
);

export type SaveExamMutationVariables = Exact<{
  input: SaveExamInput;
}>;


export type SaveExamMutation = (
  { __typename?: 'Mutation' }
  & { saveExam?: Maybe<(
    { __typename?: 'Cursus' }
    & Pick<Cursus, 'CursusID'>
  )> }
);

export type SaveLocationMutationVariables = Exact<{
  input: SaveLocationInput;
}>;


export type SaveLocationMutation = (
  { __typename?: 'Mutation' }
  & { saveLocation: (
    { __typename?: 'Locatie' }
    & Pick<Locatie, 'LocatieID' | 'Naam'>
  ) }
);


export const GetMyDocument = gql`
    query getMy {
  my {
    Roles
    Persoon {
      PersoonID
    }
  }
}
    `;

/**
 * __useGetMyQuery__
 *
 * To run a query within a React component, call `useGetMyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyQuery(baseOptions?: Apollo.QueryHookOptions<GetMyQuery, GetMyQueryVariables>) {
        return Apollo.useQuery<GetMyQuery, GetMyQueryVariables>(GetMyDocument, baseOptions);
      }
export function useGetMyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyQuery, GetMyQueryVariables>) {
          return Apollo.useLazyQuery<GetMyQuery, GetMyQueryVariables>(GetMyDocument, baseOptions);
        }
export type GetMyQueryHookResult = ReturnType<typeof useGetMyQuery>;
export type GetMyLazyQueryHookResult = ReturnType<typeof useGetMyLazyQuery>;
export type GetMyQueryResult = Apollo.QueryResult<GetMyQuery, GetMyQueryVariables>;
export const SearchLocationsDocument = gql`
    query SearchLocations($ExamenInstellingID: Int!) {
  SearchLocations(input: {ExamenInstellingID: $ExamenInstellingID}) {
    LocatieID
    Naam
    Contactgegevens {
      Woonplaats
    }
  }
}
    `;

/**
 * __useSearchLocationsQuery__
 *
 * To run a query within a React component, call `useSearchLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchLocationsQuery({
 *   variables: {
 *      ExamenInstellingID: // value for 'ExamenInstellingID'
 *   },
 * });
 */
export function useSearchLocationsQuery(baseOptions?: Apollo.QueryHookOptions<SearchLocationsQuery, SearchLocationsQueryVariables>) {
        return Apollo.useQuery<SearchLocationsQuery, SearchLocationsQueryVariables>(SearchLocationsDocument, baseOptions);
      }
export function useSearchLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchLocationsQuery, SearchLocationsQueryVariables>) {
          return Apollo.useLazyQuery<SearchLocationsQuery, SearchLocationsQueryVariables>(SearchLocationsDocument, baseOptions);
        }
export type SearchLocationsQueryHookResult = ReturnType<typeof useSearchLocationsQuery>;
export type SearchLocationsLazyQueryHookResult = ReturnType<typeof useSearchLocationsLazyQuery>;
export type SearchLocationsQueryResult = Apollo.QueryResult<SearchLocationsQuery, SearchLocationsQueryVariables>;
export const SearchOrganizersDocument = gql`
    query SearchOrganizers {
  SearchOrganizers {
    Text: Naam
    Value: ExamenInstellingID
  }
}
    `;

/**
 * __useSearchOrganizersQuery__
 *
 * To run a query within a React component, call `useSearchOrganizersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchOrganizersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchOrganizersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSearchOrganizersQuery(baseOptions?: Apollo.QueryHookOptions<SearchOrganizersQuery, SearchOrganizersQueryVariables>) {
        return Apollo.useQuery<SearchOrganizersQuery, SearchOrganizersQueryVariables>(SearchOrganizersDocument, baseOptions);
      }
export function useSearchOrganizersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchOrganizersQuery, SearchOrganizersQueryVariables>) {
          return Apollo.useLazyQuery<SearchOrganizersQuery, SearchOrganizersQueryVariables>(SearchOrganizersDocument, baseOptions);
        }
export type SearchOrganizersQueryHookResult = ReturnType<typeof useSearchOrganizersQuery>;
export type SearchOrganizersLazyQueryHookResult = ReturnType<typeof useSearchOrganizersLazyQuery>;
export type SearchOrganizersQueryResult = Apollo.QueryResult<SearchOrganizersQuery, SearchOrganizersQueryVariables>;
export const SpecialtiesDocument = gql`
    query Specialties($examenInstellingId: Int!) {
  Specialties(input: {examenInstellingId: $examenInstellingId, validOnly: true}) {
    VakID
    Afkorting
    Code
    Titel
    Kosten
    MinimumDatum
    MaximumDatum
    Competenties {
      Naam
      Code
    }
    Themas {
      Naam
      Code
    }
    Promotietekst
  }
}
    `;

/**
 * __useSpecialtiesQuery__
 *
 * To run a query within a React component, call `useSpecialtiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpecialtiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpecialtiesQuery({
 *   variables: {
 *      examenInstellingId: // value for 'examenInstellingId'
 *   },
 * });
 */
export function useSpecialtiesQuery(baseOptions?: Apollo.QueryHookOptions<SpecialtiesQuery, SpecialtiesQueryVariables>) {
        return Apollo.useQuery<SpecialtiesQuery, SpecialtiesQueryVariables>(SpecialtiesDocument, baseOptions);
      }
export function useSpecialtiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpecialtiesQuery, SpecialtiesQueryVariables>) {
          return Apollo.useLazyQuery<SpecialtiesQuery, SpecialtiesQueryVariables>(SpecialtiesDocument, baseOptions);
        }
export type SpecialtiesQueryHookResult = ReturnType<typeof useSpecialtiesQuery>;
export type SpecialtiesLazyQueryHookResult = ReturnType<typeof useSpecialtiesLazyQuery>;
export type SpecialtiesQueryResult = Apollo.QueryResult<SpecialtiesQuery, SpecialtiesQueryVariables>;
export const SpecialtyDocument = gql`
    query Specialty($vakId: Int!) {
  Specialty(vakId: $vakId) {
    VakID
    ExamenInstellingID
    Code
    Titel
    Promotietekst
    Kosten
    MinimumDatum
    MaximumDatum
    MaximumCursisten
  }
}
    `;

/**
 * __useSpecialtyQuery__
 *
 * To run a query within a React component, call `useSpecialtyQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpecialtyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpecialtyQuery({
 *   variables: {
 *      vakId: // value for 'vakId'
 *   },
 * });
 */
export function useSpecialtyQuery(baseOptions?: Apollo.QueryHookOptions<SpecialtyQuery, SpecialtyQueryVariables>) {
        return Apollo.useQuery<SpecialtyQuery, SpecialtyQueryVariables>(SpecialtyDocument, baseOptions);
      }
export function useSpecialtyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpecialtyQuery, SpecialtyQueryVariables>) {
          return Apollo.useLazyQuery<SpecialtyQuery, SpecialtyQueryVariables>(SpecialtyDocument, baseOptions);
        }
export type SpecialtyQueryHookResult = ReturnType<typeof useSpecialtyQuery>;
export type SpecialtyLazyQueryHookResult = ReturnType<typeof useSpecialtyLazyQuery>;
export type SpecialtyQueryResult = Apollo.QueryResult<SpecialtyQuery, SpecialtyQueryVariables>;
export const ExamsDocument = gql`
    query Exams($input: examsInput!) {
  Exams(input: $input) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      CursusID
      VakID
      Titel
      CursusCode
      IsBesloten
      Sessies {
        SessieID
        Datum
        Locatie {
          LocatieID
          Naam
          Contactgegevens {
            ContactgegevensID
            Woonplaats
          }
        }
      }
      CursusDeelnames {
        Status
      }
    }
  }
}
    `;

/**
 * __useExamsQuery__
 *
 * To run a query within a React component, call `useExamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExamsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExamsQuery(baseOptions?: Apollo.QueryHookOptions<ExamsQuery, ExamsQueryVariables>) {
        return Apollo.useQuery<ExamsQuery, ExamsQueryVariables>(ExamsDocument, baseOptions);
      }
export function useExamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamsQuery, ExamsQueryVariables>) {
          return Apollo.useLazyQuery<ExamsQuery, ExamsQueryVariables>(ExamsDocument, baseOptions);
        }
export type ExamsQueryHookResult = ReturnType<typeof useExamsQuery>;
export type ExamsLazyQueryHookResult = ReturnType<typeof useExamsLazyQuery>;
export type ExamsQueryResult = Apollo.QueryResult<ExamsQuery, ExamsQueryVariables>;
export const ExamDetailsDocument = gql`
    query ExamDetails($input: searchExamInput!) {
  ExamDetails(input: $input) {
    Cursus {
      CursusID
      VakID
      CursusleiderID
      Prijs
      Titel
      Promotietekst
      IsBesloten
      MaximumCursisten
      Opmerkingen
      Status
      CursusCode
      DatumAangemaakt
      DatumGewijzigd
      PersoonIDAangemaakt
      PersoonIDGewijzigd
      Vak {
        VakID
        MinimumDatum
        MaximumDatum
        ExamenInstellingID
        ExamenInstelling {
          Naam
          Contactgegevens {
            Adresregel1
            Huisnummer
            HuisnummerToevoeging
            Woonplaats
            Telefoon
            Email
          }
          ContactpersoonExamenInstelling {
            Persoon {
              SortableFullName
            }
          }
        }
      }
      Sessies {
        SessieID
        Datum
        Begintijd
        Eindtijd
        Opmerkingen
        ExaminatorPersoon {
          PersoonID
          SortableFullName
        }
        ExamenVersie {
          ExamenVersieID
          ExamenType
          ExamenVersieCode
          ExamenOmschrijving
          StartDatum
          EindDatum
          Documenten {
            ExamenVersieDocumentID
            AangemaaktDatum
            AangemaaktDoor
            Document {
              DocumentID
              Naam
              Locatie
              Omschrijving
            }
          }
        }
        Locatie {
          LocatieID
          Naam
          Contactgegevens {
            ContactgegevensID
            Woonplaats
          }
        }
      }
      CursusDeelnames {
        Status
        Persoon {
          PersoonID
          SortableFullName
        }
      }
    }
  }
}
    `;

/**
 * __useExamDetailsQuery__
 *
 * To run a query within a React component, call `useExamDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExamDetailsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExamDetailsQuery(baseOptions?: Apollo.QueryHookOptions<ExamDetailsQuery, ExamDetailsQueryVariables>) {
        return Apollo.useQuery<ExamDetailsQuery, ExamDetailsQueryVariables>(ExamDetailsDocument, baseOptions);
      }
export function useExamDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamDetailsQuery, ExamDetailsQueryVariables>) {
          return Apollo.useLazyQuery<ExamDetailsQuery, ExamDetailsQueryVariables>(ExamDetailsDocument, baseOptions);
        }
export type ExamDetailsQueryHookResult = ReturnType<typeof useExamDetailsQuery>;
export type ExamDetailsLazyQueryHookResult = ReturnType<typeof useExamDetailsLazyQuery>;
export type ExamDetailsQueryResult = Apollo.QueryResult<ExamDetailsQuery, ExamDetailsQueryVariables>;
export const ExaminersDocument = gql`
    query Examiners {
  Examinatoren {
    PersoonID
    SortableFullName
    Contactgegevens {
      Woonplaats
    }
  }
}
    `;

/**
 * __useExaminersQuery__
 *
 * To run a query within a React component, call `useExaminersQuery` and pass it any options that fit your needs.
 * When your component renders, `useExaminersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExaminersQuery({
 *   variables: {
 *   },
 * });
 */
export function useExaminersQuery(baseOptions?: Apollo.QueryHookOptions<ExaminersQuery, ExaminersQueryVariables>) {
        return Apollo.useQuery<ExaminersQuery, ExaminersQueryVariables>(ExaminersDocument, baseOptions);
      }
export function useExaminersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExaminersQuery, ExaminersQueryVariables>) {
          return Apollo.useLazyQuery<ExaminersQuery, ExaminersQueryVariables>(ExaminersDocument, baseOptions);
        }
export type ExaminersQueryHookResult = ReturnType<typeof useExaminersQuery>;
export type ExaminersLazyQueryHookResult = ReturnType<typeof useExaminersLazyQuery>;
export type ExaminersQueryResult = Apollo.QueryResult<ExaminersQuery, ExaminersQueryVariables>;
export const SearchExamVersionsDocument = gql`
    query SearchExamVersions($input: searchExamVersionsInput!) {
  SearchExamVersions(input: $input) {
    Value: ExamenVersieID
    Text: ExamenOmschrijving
  }
}
    `;

/**
 * __useSearchExamVersionsQuery__
 *
 * To run a query within a React component, call `useSearchExamVersionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchExamVersionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchExamVersionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchExamVersionsQuery(baseOptions?: Apollo.QueryHookOptions<SearchExamVersionsQuery, SearchExamVersionsQueryVariables>) {
        return Apollo.useQuery<SearchExamVersionsQuery, SearchExamVersionsQueryVariables>(SearchExamVersionsDocument, baseOptions);
      }
export function useSearchExamVersionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchExamVersionsQuery, SearchExamVersionsQueryVariables>) {
          return Apollo.useLazyQuery<SearchExamVersionsQuery, SearchExamVersionsQueryVariables>(SearchExamVersionsDocument, baseOptions);
        }
export type SearchExamVersionsQueryHookResult = ReturnType<typeof useSearchExamVersionsQuery>;
export type SearchExamVersionsLazyQueryHookResult = ReturnType<typeof useSearchExamVersionsLazyQuery>;
export type SearchExamVersionsQueryResult = Apollo.QueryResult<SearchExamVersionsQuery, SearchExamVersionsQueryVariables>;
export const ExamVersionDocumentsDocument = gql`
    query ExamVersionDocuments($input: examVersionDocumentsInput!) {
  ExamVersionDocuments(input: $input) {
    ExamenVersieCode
    ExamenOmschrijving
    StartDatum
    EindDatum
    Documenten {
      AangemaaktDoor
      AangemaaktDatum
      Document {
        DocumentID
        Naam
        Locatie
        Omschrijving
      }
    }
  }
}
    `;

/**
 * __useExamVersionDocumentsQuery__
 *
 * To run a query within a React component, call `useExamVersionDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamVersionDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExamVersionDocumentsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExamVersionDocumentsQuery(baseOptions?: Apollo.QueryHookOptions<ExamVersionDocumentsQuery, ExamVersionDocumentsQueryVariables>) {
        return Apollo.useQuery<ExamVersionDocumentsQuery, ExamVersionDocumentsQueryVariables>(ExamVersionDocumentsDocument, baseOptions);
      }
export function useExamVersionDocumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamVersionDocumentsQuery, ExamVersionDocumentsQueryVariables>) {
          return Apollo.useLazyQuery<ExamVersionDocumentsQuery, ExamVersionDocumentsQueryVariables>(ExamVersionDocumentsDocument, baseOptions);
        }
export type ExamVersionDocumentsQueryHookResult = ReturnType<typeof useExamVersionDocumentsQuery>;
export type ExamVersionDocumentsLazyQueryHookResult = ReturnType<typeof useExamVersionDocumentsLazyQuery>;
export type ExamVersionDocumentsQueryResult = Apollo.QueryResult<ExamVersionDocumentsQuery, ExamVersionDocumentsQueryVariables>;
export const SaveExamDocument = gql`
    mutation saveExam($input: SaveExamInput!) {
  saveExam(input: $input) {
    CursusID
  }
}
    `;
export type SaveExamMutationFn = Apollo.MutationFunction<SaveExamMutation, SaveExamMutationVariables>;

/**
 * __useSaveExamMutation__
 *
 * To run a mutation, you first call `useSaveExamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveExamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveExamMutation, { data, loading, error }] = useSaveExamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaveExamMutation(baseOptions?: Apollo.MutationHookOptions<SaveExamMutation, SaveExamMutationVariables>) {
        return Apollo.useMutation<SaveExamMutation, SaveExamMutationVariables>(SaveExamDocument, baseOptions);
      }
export type SaveExamMutationHookResult = ReturnType<typeof useSaveExamMutation>;
export type SaveExamMutationResult = Apollo.MutationResult<SaveExamMutation>;
export type SaveExamMutationOptions = Apollo.BaseMutationOptions<SaveExamMutation, SaveExamMutationVariables>;
export const SaveLocationDocument = gql`
    mutation saveLocation($input: saveLocationInput!) {
  saveLocation(input: $input) {
    LocatieID
    Naam
  }
}
    `;
export type SaveLocationMutationFn = Apollo.MutationFunction<SaveLocationMutation, SaveLocationMutationVariables>;

/**
 * __useSaveLocationMutation__
 *
 * To run a mutation, you first call `useSaveLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveLocationMutation, { data, loading, error }] = useSaveLocationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaveLocationMutation(baseOptions?: Apollo.MutationHookOptions<SaveLocationMutation, SaveLocationMutationVariables>) {
        return Apollo.useMutation<SaveLocationMutation, SaveLocationMutationVariables>(SaveLocationDocument, baseOptions);
      }
export type SaveLocationMutationHookResult = ReturnType<typeof useSaveLocationMutation>;
export type SaveLocationMutationResult = Apollo.MutationResult<SaveLocationMutation>;
export type SaveLocationMutationOptions = Apollo.BaseMutationOptions<SaveLocationMutation, SaveLocationMutationVariables>;