import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The Email scalar type represents E-Mail addresses compliant to RFC 822. */
  Email: any;
  /** Safe string custom scalar type that does not allow xss attacks */
  SafeString: any;
};

export type BasicPersonData = {
  Email?: InputMaybe<Scalars['String']>;
  PersoonID: Scalars['Int'];
};

export type Beoordeling = {
  __typename?: 'Beoordeling';
  Beoordelaar?: Maybe<Persoon>;
  BeoordelingID: Scalars['Int'];
  DatumGepland?: Maybe<Scalars['Date']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  PersoonID?: Maybe<Scalars['Int']>;
  Rapport?: Maybe<Scalars['String']>;
  RapportCijfer?: Maybe<Scalars['Int']>;
  Status?: Maybe<BeoordelingStatusEnum>;
  VakID: Scalars['Int'];
};

export enum BeoordelingStatusEnum {
  Afgekeurd = 'AFGEKEURD',
  Goedgekeurd = 'GOEDGEKEURD',
  TerBeoordeling = 'TER_BEOORDELING'
}

export type Certificaat = {
  __typename?: 'Certificaat';
  CertificaatID: Scalars['Int'];
  Code: Scalars['String'];
  Naam: Scalars['String'];
};

export type Certificering = {
  __typename?: 'Certificering';
  BeginDatum?: Maybe<Scalars['Date']>;
  Certificaat?: Maybe<Certificaat>;
  CertificaatID: Scalars['Int'];
  CertificeringID: Scalars['Int'];
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumIngetrokkenTot?: Maybe<Scalars['Date']>;
  DatumIngetrokkenVan?: Maybe<Scalars['Date']>;
  /** Datum waarop alle verplichte bijeenkomsten zijn gevolgd */
  DatumVoldaan?: Maybe<Scalars['Date']>;
  EindDatum?: Maybe<Scalars['Date']>;
  IsVerlengingVan?: Maybe<Scalars['Int']>;
  NormVersieID?: Maybe<Scalars['Int']>;
  Nummer: Scalars['String'];
  NummerWeergave: Scalars['String'];
  Opmerkingen: Scalars['String'];
  Passen?: Maybe<Array<Maybe<Pas>>>;
  PersoonID: Scalars['Int'];
  Status: CertificeringStatusEnum;
  UitstelTot?: Maybe<Scalars['Date']>;
  UitstelVerleend?: Maybe<Scalars['Boolean']>;
};

export enum CertificeringStatusEnum {
  Geldig = 'GELDIG',
  Ingenomen = 'INGENOMEN',
  Ingetrokken = 'INGETROKKEN',
  Verlopen = 'VERLOPEN'
}

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  dateOfComment?: Maybe<Scalars['Date']>;
  sort?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Competentie = {
  __typename?: 'Competentie';
  Code: Scalars['String'];
  CompetentieID: Scalars['Int'];
  Naam: Scalars['String'];
  UniversiteitID?: Maybe<Scalars['Int']>;
};

export type Contactgegevens = {
  __typename?: 'Contactgegevens';
  Adresregel1: Scalars['String'];
  Adresregel2?: Maybe<Scalars['String']>;
  ContactgegevensID: Scalars['Int'];
  DisplayAddress?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  EmailWerkgever?: Maybe<Scalars['String']>;
  FactuurAdres?: Maybe<Scalars['String']>;
  Fax?: Maybe<Scalars['String']>;
  Huisnummer: Scalars['String'];
  HuisnummerToevoeging?: Maybe<Scalars['String']>;
  Land: Scalars['String'];
  Postcode: Scalars['String'];
  RekeningNummer?: Maybe<Scalars['String']>;
  Telefoon?: Maybe<Scalars['String']>;
  TerAttentieVan?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  Woonplaats: Scalars['String'];
};

export type ContactgegevensInput = {
  Adresregel1: Scalars['SafeString'];
  Email?: InputMaybe<Scalars['SafeString']>;
  Huisnummer: Scalars['SafeString'];
  HuisnummerToevoeging?: InputMaybe<Scalars['SafeString']>;
  Land: Scalars['SafeString'];
  Postcode: Scalars['SafeString'];
  Telefoon?: InputMaybe<Scalars['SafeString']>;
  Website?: InputMaybe<Scalars['SafeString']>;
  Woonplaats: Scalars['SafeString'];
};

export type ContactpersoonExamenInstelling = {
  __typename?: 'ContactpersoonExamenInstelling';
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ContactgegevensID: Scalars['Int'];
  ExamenInstellingID: Scalars['Int'];
  IsActief: Scalars['Boolean'];
  IsBtwPlichtig: Scalars['Boolean'];
  Naam: Scalars['String'];
  Persoon: Persoon;
  PersoonID: Scalars['Int'];
};

export type CreateInvoiceCollectionInput = {
  invoiceIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type CreateInvoiceCollectionResult = {
  __typename?: 'CreateInvoiceCollectionResult';
  invoiceCollectionId?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type CreatePersonByBsn = {
  /** BSN can be 8 or 9 digits long */
  BSN: Scalars['Int'];
  /** Email address is required */
  Email: Scalars['String'];
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
};

export type CreatePersonByPersonData = {
  /** Max 50 chars */
  Achternaam: Scalars['String'];
  /** Max 100 chars */
  Adresregel1: Scalars['String'];
  /** Max 100 chars */
  Adresregel2?: InputMaybe<Scalars['String']>;
  /** Email address is required */
  Email: Scalars['String'];
  /**
   * Use i.e. `new Date(Date.UTC(1955, 8, 3)).getTime()`
   * which is: 3 sept 1955 00:00:00 GMT+2 (CEST)
   * Needed to match SQL Server database field value for a Date field
   */
  Geboortedatum: Scalars['Date'];
  /** Can only be 'o', 'm, 'v' */
  Geslacht: GeslachtEnum;
  /** Max 20 chars */
  Huisnummer: Scalars['Int'];
  /** Max 20 chars */
  HuisnummerToevoeging?: InputMaybe<Scalars['String']>;
  /** Use Landen endpoint */
  Land: Scalars['String'];
  /** Use Nationaliteiten endpoint */
  Nationaliteit: Scalars['String'];
  /** Max 20 chars */
  Postcode: Scalars['String'];
  /** Max 50 chars */
  Tussenvoegsel?: InputMaybe<Scalars['String']>;
  /** Max 50 chars */
  Voorletters: Scalars['String'];
  /** Max 100 chars */
  Woonplaats: Scalars['String'];
};

export enum CrediteurTypeEnum {
  Persoon = 'PERSOON',
  Universiteit = 'UNIVERSITEIT'
}

export type Cursus = {
  __typename?: 'Cursus';
  /**  Only available when sub query is available  */
  AantalCursusDeelnames?: Maybe<Scalars['Int']>;
  AocKenmerk?: Maybe<Scalars['String']>;
  CursusCode?: Maybe<Scalars['String']>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  CursusID: Scalars['Int'];
  CursusleiderID?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  /**  Only available when sub query is available  */
  EersteSessieDatum?: Maybe<Scalars['Date']>;
  ExamenCursusID?: Maybe<Scalars['Int']>;
  IsBesloten?: Maybe<Scalars['Boolean']>;
  /**  Only available when sub query is available  */
  LocatiePlaats?: Maybe<Scalars['String']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  Prijs?: Maybe<Scalars['Float']>;
  Promotietekst?: Maybe<Scalars['String']>;
  Sessies?: Maybe<Array<Maybe<Sessie>>>;
  Status?: Maybe<Scalars['String']>;
  /**  Only available when sub query is available  */
  StudieresultaatStatus?: Maybe<StudieresultaatStatusEnum>;
  Titel?: Maybe<Scalars['String']>;
  Vak: Vak;
  /**  Only available when sub query is available  */
  VakExamenType?: Maybe<VakExamenTypeEnum>;
  VakID?: Maybe<Scalars['Int']>;
};

export type CursusDeelname = {
  __typename?: 'CursusDeelname';
  Certificering?: Maybe<Certificering>;
  CertificeringID?: Maybe<Scalars['Int']>;
  Cursus: Cursus;
  CursusDeelnameID: Scalars['Int'];
  CursusID: Scalars['Int'];
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  GeslaagdVoorCertificaatID?: Maybe<Scalars['Int']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  Persoon: Persoon;
  PersoonID: Scalars['Int'];
  Status: CursusDeelnameStatusEnum;
  StudieresultaatStatus?: Maybe<StudieresultaatStatusEnum>;
};

export enum CursusDeelnameStatusEnum {
  Aangemeld = 'AANGEMELD',
  Aanwezig = 'AANWEZIG',
  Afgemeld = 'AFGEMELD',
  Afgewezen = 'AFGEWEZEN',
  Betaald = 'BETAALD',
  Geregistreerd = 'GEREGISTREERD',
  Geslaagd = 'GESLAAGD',
  GeslaagdPraktijkGezaktTheorie = 'GESLAAGD_PRAKTIJK_GEZAKT_THEORIE',
  GeslaagdTheorieGezaktPraktijk = 'GESLAAGD_THEORIE_GEZAKT_PRAKTIJK',
  Gezakt = 'GEZAKT',
  Voorlopig = 'VOORLOPIG'
}

export type CursusNodes = {
  __typename?: 'CursusNodes';
  nodes?: Maybe<Array<Maybe<Cursus>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export enum CursusStatusEnum {
  Betaald = 'BETAALD',
  ExamenAangemeld = 'EXAMEN_AANGEMELD',
  Goedgekeurd = 'GOEDGEKEURD',
  Voorlopig = 'VOORLOPIG'
}

export enum DebiteurTypeEnum {
  Exameninstelling = 'EXAMENINSTELLING',
  Persoon = 'PERSOON',
  Universiteit = 'UNIVERSITEIT',
  Vakgroep = 'VAKGROEP'
}

export type DeleteExamInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
};

export type Document = {
  __typename?: 'Document';
  DocumentID: Scalars['Int'];
  Locatie?: Maybe<Scalars['String']>;
  Naam?: Maybe<Scalars['String']>;
  Omschrijving?: Maybe<Scalars['String']>;
};

export type Exam = {
  __typename?: 'Exam';
  Cursus?: Maybe<Cursus>;
  Vaknorm?: Maybe<Vaknorm>;
};

export type ExamenInstelling = {
  __typename?: 'ExamenInstelling';
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ContactgegevensID: Scalars['Int'];
  ContactpersoonExamenInstelling?: Maybe<Array<Maybe<ContactpersoonExamenInstelling>>>;
  ExamenInstellingID: Scalars['Int'];
  IsActief: Scalars['Boolean'];
  IsBtwPlichtig: Scalars['Boolean'];
  Naam: Scalars['String'];
  UniversiteitID: Scalars['Int'];
};

export type ExamenInstellingLink = {
  __typename?: 'ExamenInstellingLink';
  Actief: Scalars['Boolean'];
  ContactpersoonExamenInstellingID: Scalars['Int'];
  ExamenInstelling?: Maybe<ExamenInstelling>;
  ExamenInstellingID: Scalars['Int'];
  PersoonID: Scalars['Int'];
};

export enum ExamenTypeEnum {
  DigitaalExamen = 'DIGITAAL_EXAMEN',
  PapierenExamen = 'PAPIEREN_EXAMEN'
}

export type ExamenVersie = {
  __typename?: 'ExamenVersie';
  Documenten?: Maybe<Array<Maybe<ExamenVersieDocument>>>;
  EindDatum?: Maybe<Scalars['Date']>;
  ExamenOmschrijving: Scalars['String'];
  ExamenType: Scalars['String'];
  ExamenVersieCode: Scalars['String'];
  ExamenVersieID: Scalars['Int'];
  StartDatum?: Maybe<Scalars['Date']>;
};

export type ExamenVersieDocument = {
  __typename?: 'ExamenVersieDocument';
  AangemaaktDatum?: Maybe<Scalars['Date']>;
  AangemaaktDoor?: Maybe<Scalars['String']>;
  Document: Document;
  DocumentID: Scalars['Int'];
  ExamenVersieDocumentID: Scalars['Int'];
  ExamenVersieID: Scalars['Int'];
};

export type ExamsInput = {
  cursusStatus?: InputMaybe<CursusStatusEnum>;
  examCode?: InputMaybe<Scalars['SafeString']>;
  from?: InputMaybe<Scalars['Date']>;
  locationId?: InputMaybe<Scalars['Int']>;
  orderBy: OrderByArgs;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  title?: InputMaybe<Scalars['SafeString']>;
  to?: InputMaybe<Scalars['Date']>;
};

export type ExamSpecialty = {
  __typename?: 'ExamSpecialty';
  Vak?: Maybe<Vak>;
  Vaknorm?: Maybe<Vaknorm>;
};

export type ExamVersionDocumentsInput = {
  ExamenVersieID: Scalars['Int'];
};

export type ExportCardsResult = {
  __typename?: 'exportCardsResult';
  fileName: Scalars['String'];
  result: Scalars['String'];
};

export type Factuur = {
  __typename?: 'Factuur';
  Bedrag: Scalars['Float'];
  BtwBedrag: Scalars['Float'];
  CrediteurContactgegevensID: Scalars['Int'];
  CrediteurID: Scalars['Int'];
  CrediteurType: CrediteurTypeEnum;
  Datum: Scalars['Date'];
  DatumAangemaakt: Scalars['Date'];
  DebiteurContactgegevensID: Scalars['Int'];
  DebiteurID: Scalars['Int'];
  DebiteurType: DebiteurTypeEnum;
  FactuurHistorie?: Maybe<Array<Maybe<FactuurHistorie>>>;
  FactuurID: Scalars['Int'];
  FactuurNummer: Scalars['String'];
  FactuurRegels?: Maybe<Array<Maybe<FactuurRegel>>>;
  invoiceLink?: Maybe<Scalars['String']>;
  IsCreditFactuur?: Maybe<Scalars['Boolean']>;
  ItemID: Scalars['Int'];
  ItemType: FactuurItemTypeEnum;
  Kenmerk?: Maybe<Scalars['String']>;
  KenmerkJaarFactuurNummer?: Maybe<Scalars['String']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  OrigineleFactuurID?: Maybe<Scalars['Int']>;
  Status: FactuurStatusEnum;
};

export type FactuurHistorie = {
  __typename?: 'FactuurHistorie';
  AangemaaktDoor?: Maybe<Scalars['String']>;
  Datum: Scalars['Date'];
  DatumAangemaakt: Scalars['Date'];
  FactuurHistorieID: Scalars['Int'];
  FactuurID: Scalars['Int'];
  Opmerkingen: Scalars['String'];
  Status: FactuurStatusEnum;
};

export enum FactuurItemTypeEnum {
  Duplicaat = 'DUPLICAAT',
  ExamenAanmeldingen = 'EXAMEN_AANMELDINGEN',
  ExamenGeslaagdenRegistratie = 'EXAMEN_GESLAAGDEN_REGISTRATIE',
  Visitatie = 'VISITATIE'
}

export type FactuurRegel = {
  __typename?: 'FactuurRegel';
  Bedrag: Scalars['Float'];
  BtwPercentage?: Maybe<Scalars['Float']>;
  CrediteurID: Scalars['Int'];
  CrediteurType: CrediteurTypeEnum;
  Datum: Scalars['Date'];
  DatumAangemaakt: Scalars['Date'];
  DebiteurID: Scalars['Int'];
  DebiteurType: DebiteurTypeEnum;
  FactuurID: Scalars['Int'];
  FactuurRegelID: Scalars['Int'];
  ItemID: Scalars['Int'];
  ItemType: Scalars['String'];
  Omschrijving: Scalars['String'];
  ProductID: Scalars['Int'];
};

export enum FactuurStatusEnum {
  Aangemaakt = 'AANGEMAAKT',
  Afgehandeld = 'AFGEHANDELD',
  Betaald = 'BETAALD',
  Creditfactuur = 'CREDITFACTUUR',
  GedeeltelijkBetaald = 'GEDEELTELIJK_BETAALD',
  Oninbaar = 'ONINBAAR',
  OnjuistAangemaakt = 'ONJUIST_AANGEMAAKT'
}

export type FilterInvoicesInput = {
  CrediteurID?: InputMaybe<Scalars['Int']>;
  CrediteurType?: InputMaybe<CrediteurTypeEnum>;
  CursusCode?: InputMaybe<Scalars['SafeString']>;
  DebiteurID?: InputMaybe<Scalars['Int']>;
  DebiteurType?: InputMaybe<DebiteurTypeEnum>;
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  FactuurNummer?: InputMaybe<Scalars['SafeString']>;
  ForReviewersOnly?: InputMaybe<Scalars['Boolean']>;
  FromDate?: InputMaybe<Scalars['Date']>;
  InvoiceCollectionFilter?: InputMaybe<InvoiceCollectionsFilterEnum>;
  InvoiceStatusFilterList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  PaymentStatus?: InputMaybe<PaymentStatusEnum>;
  ToDate?: InputMaybe<Scalars['Date']>;
  VakgroepID?: InputMaybe<Scalars['Int']>;
};

export enum GeslachtEnum {
  M = 'M',
  O = 'O',
  V = 'V'
}

export type GetInspectionPlanningInput = {
  isInspector: Scalars['Boolean'];
  isRector: Scalars['Boolean'];
  plannable: Scalars['Boolean'];
  shouldOnlyBePlanned: Scalars['Boolean'];
  showStatsForPeriod: Scalars['Boolean'];
  startDate: Scalars['Date'];
  targetSettings: TargetSettings;
};

export type InspectionPlanningData = {
  __typename?: 'InspectionPlanningData';
  NrOfDaysSinceLastVisit?: Maybe<Scalars['Int']>;
  OrganizerTargetActual: Scalars['Float'];
  SessieData: PlanningData;
  ShouldBeVisited: Scalars['Boolean'];
  SpecialtyTargetActual: Scalars['Float'];
};

export type InspectionResult = {
  __typename?: 'InspectionResult';
  InspectionStatisticsOverall?: Maybe<VisitingData>;
  PlanningData: Array<Maybe<InspectionPlanningData>>;
  StatisticsPerOrganizer?: Maybe<Array<Maybe<StatisticsPerOrganizer>>>;
};

export type Inspector = {
  __typename?: 'Inspector';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  BedragExBtw: Scalars['Float'];
  BedragIncBtw: Scalars['Float'];
  BtwBedrag: Scalars['Float'];
  CrediteurID: Scalars['Int'];
  CrediteurType: CrediteurTypeEnum;
  CreditFactuurID?: Maybe<Scalars['Int']>;
  CreditFactuurNummer?: Maybe<Scalars['String']>;
  CreditInvoiceLink?: Maybe<Scalars['String']>;
  CursusCode: Scalars['String'];
  DebiteurID: Scalars['Int'];
  DebiteurNaam: Scalars['String'];
  DebiteurType: DebiteurTypeEnum;
  FactuurDatum: Scalars['Date'];
  FactuurID: Scalars['Int'];
  FactuurJaar: Scalars['Int'];
  FactuurNummer: Scalars['String'];
  FactuurStatus: Scalars['String'];
  InVerzamelfactuur: Scalars['Int'];
  InvoiceLink: Scalars['String'];
  IsBetaald: Scalars['Boolean'];
  IsCreditFactuur?: Maybe<Scalars['Boolean']>;
  ItemType: Scalars['String'];
  Kenmerk?: Maybe<Scalars['String']>;
  KenmerkJaarFactuurNummer: Scalars['String'];
  OrigineleFactuurID?: Maybe<Scalars['Int']>;
  OrigineleFactuurNummer?: Maybe<Scalars['String']>;
  OrigineleInvoiceLink?: Maybe<Scalars['String']>;
  ProductCode: Scalars['String'];
  StatusOpmerkingen?: Maybe<Scalars['String']>;
  VerzamelFactuurBedrag: Scalars['Float'];
  VerzamelFactuurBTWBedrag: Scalars['Float'];
  VerzamelFactuurDatum?: Maybe<Scalars['Date']>;
  VerzamelFactuurDatumBetaald?: Maybe<Scalars['Date']>;
  VerzamelFactuurID: Scalars['Int'];
  VerzamelFactuurIsBetaald: Scalars['Boolean'];
  VerzamelFactuurOpmerking?: Maybe<Scalars['String']>;
};

export enum InvoiceCollectionsFilterEnum {
  Both = 'BOTH',
  InvoiceCollections = 'INVOICE_COLLECTIONS',
  NormalInvoices = 'NORMAL_INVOICES'
}

export type InvoiceNodes = {
  __typename?: 'InvoiceNodes';
  nodes?: Maybe<Array<Maybe<Invoice>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type Kennisgebied = {
  __typename?: 'Kennisgebied';
  KennisgebiedID: Scalars['Int'];
  Naam: Scalars['String'];
  UniversiteitID?: Maybe<Scalars['Int']>;
};

export type Landen = {
  __typename?: 'Landen';
  Text: Scalars['String'];
  Value: Scalars['String'];
};

export type LastVisitData = {
  __typename?: 'LastVisitData';
  AccordingIntention?: Maybe<Scalars['Boolean']>;
  InspectorId?: Maybe<Scalars['Int']>;
  ReportCreatedDate?: Maybe<Scalars['Date']>;
  ReportGrade?: Maybe<Scalars['Float']>;
  VisitedDate?: Maybe<Scalars['Date']>;
};

export type Locatie = {
  __typename?: 'Locatie';
  Contactgegevens: Contactgegevens;
  ContactgegevensID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  IsActief: Scalars['Boolean'];
  LocatieID: Scalars['Int'];
  Naam: Scalars['String'];
  Routebeschrijving: Scalars['String'];
  VakgroepID?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createInvoiceCollection: CreateInvoiceCollectionResult;
  deleteExam?: Maybe<Scalars['Boolean']>;
  exportCards: ExportCardsResult;
  RegisterExamResults?: Maybe<Scalars['String']>;
  /** The `requestDuplicate` can be used to request a license card duplicate */
  requestDuplicate: RequestDuplicateResult;
  saveExam?: Maybe<Cursus>;
  /** Create or update a location */
  saveLocation: Locatie;
  updateInvoiceStatus: UpdateInvoiceStatusResult;
  updatePlanning: UpdatePlanningResult;
};


export type MutationCreateInvoiceCollectionArgs = {
  input: CreateInvoiceCollectionInput;
};


export type MutationDeleteExamArgs = {
  input: DeleteExamInput;
};


export type MutationExportCardsArgs = {
  sendToBatchMailer?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRegisterExamResultsArgs = {
  input: Array<InputMaybe<RegisterExamResultsInput>>;
};


export type MutationRequestDuplicateArgs = {
  input: RequestDuplicateInput;
};


export type MutationSaveExamArgs = {
  input: SaveExamInput;
};


export type MutationSaveLocationArgs = {
  input: SaveLocationInput;
};


export type MutationUpdateInvoiceStatusArgs = {
  input: UpdateInvoiceStatusInput;
};


export type MutationUpdatePlanningArgs = {
  inspectorId: Scalars['Int'];
  sessieId: Scalars['Int'];
  visitDate: Scalars['Date'];
};

export type My = {
  __typename?: 'My';
  /**
   * Fetches only current licenses when 'alleenGeldig' is true.
   * When false (default), fetches all licenses.
   * 'perDatum' sets the date that the licenses should be valid (default today)
   */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  /** Link to exameninstelling(en), via ContactpersoonExamenInstelling table */
  ExamenInstellingLinks?: Maybe<Array<Maybe<ExamenInstellingLink>>>;
  Persoon: Persoon;
  Roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Link to vakgroep(en), via Hoogleraar table */
  VakgroepLinks?: Maybe<Array<Maybe<VakgroepLink>>>;
};


export type MyCertificeringenArgs = {
  alleenGeldig?: InputMaybe<Scalars['Boolean']>;
  inclusiefPassen?: InputMaybe<Scalars['Boolean']>;
  perDatum?: InputMaybe<Scalars['Date']>;
};


export type MyExamenInstellingLinksArgs = {
  activeOnly?: InputMaybe<Scalars['Boolean']>;
};


export type MyVakgroepLinksArgs = {
  activeOnly?: InputMaybe<Scalars['Boolean']>;
};

export type Nationaliteit = {
  __typename?: 'Nationaliteit';
  Text: Scalars['String'];
  Value: Scalars['String'];
};

export type NormVersie = {
  __typename?: 'NormVersie';
  BeginDatum?: Maybe<Scalars['Date']>;
  Definitief?: Maybe<Scalars['Boolean']>;
  EindDatum?: Maybe<Scalars['Date']>;
  NormVersieID: Scalars['Int'];
  Opmerkingen?: Maybe<Scalars['String']>;
  UniversiteitID?: Maybe<Scalars['Int']>;
  Versienummer?: Maybe<Scalars['String']>;
};

export type OrderByArgs = {
  field: Scalars['String'];
  sortDirection: SortDirectionEnum;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Pas = {
  __typename?: 'Pas';
  Aantal: Scalars['Int'];
  BriefVerstuurd: Scalars['Boolean'];
  CertificeringID: Scalars['Int'];
  ContactgegevensID?: Maybe<Scalars['Int']>;
  DatumAanvraag: Scalars['Date'];
  DatumUitgeleverd?: Maybe<Scalars['Date']>;
  Geadresseerde?: Maybe<Scalars['String']>;
  PasID: Scalars['Int'];
  PasRetouren?: Maybe<Array<Maybe<PasRetour>>>;
  Status: PasStatusEnum;
};

export type PasRetour = {
  __typename?: 'PasRetour';
  AangemaaktDoor: Scalars['String'];
  DatumAangemaakt: Scalars['Date'];
  DatumRetour: Scalars['Date'];
  PasID: Scalars['Int'];
  PasRetourID: Scalars['Int'];
};

export enum PasStatusEnum {
  Aangevraagd = 'AANGEVRAAGD',
  Betaald = 'BETAALD',
  Error = 'ERROR',
  UitTeLeveren = 'UIT_TE_LEVEREN',
  Uitgeleverd = 'UITGELEVERD'
}

export enum PaymentStatusEnum {
  All = 'ALL',
  NotPaid = 'NOT_PAID',
  Paid = 'PAID'
}

export type Persoon = {
  __typename?: 'Persoon';
  Achternaam: Scalars['String'];
  Actief?: Maybe<Scalars['Boolean']>;
  BSN?: Maybe<Scalars['Int']>;
  /** Fetches all licenses */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  /** Gets the contact data */
  Contactgegevens: Contactgegevens;
  /** Name in format 'Voorletters [tussenvoegsel] Achternaam */
  FullName?: Maybe<Scalars['String']>;
  GbaNummer: Scalars['String'];
  GbaUpdate?: Maybe<Scalars['Date']>;
  Geboortedatum?: Maybe<Scalars['Date']>;
  Geslacht: GeslachtEnum;
  IsGbaGeregistreerd?: Maybe<Scalars['Boolean']>;
  Nationaliteit: Scalars['String'];
  PersoonID: Scalars['Int'];
  Roepnaam: Scalars['String'];
  /** Name in format 'Achternaam, Voorletters [tussenvoegsel]' */
  SortableFullName?: Maybe<Scalars['String']>;
  Tussenvoegsel: Scalars['String'];
  Voorletters: Scalars['String'];
};


export type PersoonCertificeringenArgs = {
  alleenGeldig?: InputMaybe<Scalars['Boolean']>;
  perDatum?: InputMaybe<Scalars['Date']>;
};

export type PlanningData = {
  __typename?: 'PlanningData';
  BeginDatum: Scalars['Date'];
  BeginDatumTijd?: Maybe<Scalars['Date']>;
  Begintijd?: Maybe<Scalars['String']>;
  CursusCode?: Maybe<Scalars['Int']>;
  CursusID: Scalars['Int'];
  CursusStatus?: Maybe<Scalars['String']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  DatumVisitatie?: Maybe<Scalars['Date']>;
  Eindtijd?: Maybe<Scalars['String']>;
  InstellingID: Scalars['Int'];
  InstellingNaam: Scalars['String'];
  LocatieID?: Maybe<Scalars['Int']>;
  LocatieToevoeging?: Maybe<Scalars['String']>;
  Naam?: Maybe<Scalars['String']>;
  PersoonID?: Maybe<Scalars['Int']>;
  Rapportcijfer?: Maybe<Scalars['Int']>;
  SessieID: Scalars['Int'];
  SessieType?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  VakID: Scalars['Int'];
  VakType: Scalars['String'];
  VisitatieID?: Maybe<Scalars['Int']>;
  VisitatieStatus?: Maybe<Scalars['String']>;
  VolgensIntentieAanbod?: Maybe<Scalars['Boolean']>;
  Woonplaats?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Certificaten?: Maybe<Array<Maybe<Certificaat>>>;
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  Competenties: Array<Maybe<Competentie>>;
  Contactgegevens?: Maybe<Contactgegevens>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  ExamDetails?: Maybe<Exam>;
  ExamenInstellingen: Array<Maybe<ExamenInstelling>>;
  Examinatoren?: Maybe<Array<Maybe<Persoon>>>;
  Exams?: Maybe<CursusNodes>;
  ExamsForResultsRegistration?: Maybe<CursusNodes>;
  ExamSpecialties?: Maybe<Array<Maybe<Vak>>>;
  ExamSpecialty?: Maybe<ExamSpecialty>;
  ExamVersionDocuments?: Maybe<ExamenVersie>;
  getInspectionPlanning?: Maybe<InspectionResult>;
  getInspectors?: Maybe<Array<Maybe<Inspector>>>;
  invoices: InvoiceNodes;
  invoicesByExamId?: Maybe<Array<Maybe<Factuur>>>;
  Kennisgebieden: Array<Maybe<Kennisgebied>>;
  Landen: Array<Maybe<Landen>>;
  /** Fetches data of the current logged in person */
  my?: Maybe<My>;
  Nationaliteiten: Array<Maybe<Nationaliteit>>;
  Persoon?: Maybe<Persoon>;
  PersoonZoeken?: Maybe<Persoon>;
  SearchExamVersions?: Maybe<Array<Maybe<ExamenVersie>>>;
  SearchLocations?: Maybe<Array<Maybe<Locatie>>>;
  SearchOrganizers?: Maybe<Array<Maybe<SearchOrganizerResult>>>;
  Sessie?: Maybe<Sessie>;
  Specialties?: Maybe<Array<Maybe<Vak>>>;
  Specialty?: Maybe<Vak>;
  Studieresultaten: Array<Maybe<Studieresultaat>>;
  tariefDuplicaat?: Maybe<TotaalExtBtwTarief>;
  Themas: Array<Maybe<Thema>>;
};


export type QueryCertificatenArgs = {
  idList?: InputMaybe<Array<Scalars['Int']>>;
};


export type QueryCertificeringenArgs = {
  personId: Scalars['Int'];
};


export type QueryContactgegevensArgs = {
  ContactgegevensID: Scalars['Int'];
};


export type QueryCursusDeelnamesArgs = {
  cursusId: Scalars['Int'];
};


export type QueryExamDetailsArgs = {
  input: SearchExamInput;
};


export type QueryExamenInstellingenArgs = {
  findById?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};


export type QueryExamsArgs = {
  input: ExamsInput;
};


export type QueryExamsForResultsRegistrationArgs = {
  input: SearchExamsForResultsRegistrationInput;
};


export type QueryExamSpecialtyArgs = {
  vakId: Scalars['Int'];
};


export type QueryExamVersionDocumentsArgs = {
  input: ExamVersionDocumentsInput;
};


export type QueryGetInspectionPlanningArgs = {
  input: GetInspectionPlanningInput;
};


export type QueryInvoicesArgs = {
  filterInvoices?: InputMaybe<FilterInvoicesInput>;
  orderBy?: InputMaybe<OrderByArgs>;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryInvoicesByExamIdArgs = {
  examId: Scalars['Int'];
};


export type QueryPersoonArgs = {
  PersoonID: Scalars['Int'];
};


export type QueryPersoonZoekenArgs = {
  Achternaam?: InputMaybe<Scalars['SafeString']>;
  Geboortedatum?: InputMaybe<Scalars['Date']>;
  PersoonID?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchExamVersionsArgs = {
  input: SearchExamVersionsInput;
};


export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
};


export type QuerySessieArgs = {
  sessieId: Scalars['Int'];
};


export type QuerySpecialtiesArgs = {
  input: SpecialtiesInput;
};


export type QuerySpecialtyArgs = {
  fullDetails?: InputMaybe<Scalars['Boolean']>;
  vakId: Scalars['Int'];
};


export type QueryStudieresultatenArgs = {
  PersoonID: Scalars['Int'];
};

export type RegisterExamResultsInput = {
  CertificaatID: Scalars['Int'];
  CursusDeelnameID: Scalars['Int'];
  Status: CursusDeelnameStatusEnum;
};

export type RequestDuplicateInput = {
  /** Nr of cards */
  count?: InputMaybe<Scalars['Int']>;
  /** Licenses which should be duplicated */
  licenseIds: Array<InputMaybe<Scalars['Int']>>;
  /** Remark for invoice (required for anything other than KBA) */
  remark?: InputMaybe<Scalars['String']>;
};

export type RequestDuplicateResult = {
  __typename?: 'requestDuplicateResult';
  /** One or multiple passes (1 for each license) */
  cards?: Maybe<Array<Maybe<Pas>>>;
  /**
   * The link to the invoice in format
   * window.open('iDeal/Factuur.aspx?SafeKey=ZR6HXPxJ00YCgPIvrf3ciG00iwRcs0FDOXkJ6S9AYiOnRSYChcmsCc+/DyH1KeCh1ZL95PyapQQxIqFviIvWpWZjgR77CTAvsd1k/DFhQb5VXOx7SoHu+I0+NQiOpn1nTkeXHTYqsmggI81XDjnLowbb5qmDhynQpJqCMerD5iw=','FactuurVenster','left=100,top=50,width=700,height=800,location=0,resizable=1,toolbar=1')
   */
  invoiceLink?: Maybe<Scalars['String']>;
};

export type SaveExamInput = {
  Begintijd: Scalars['Date'];
  CursusID?: InputMaybe<Scalars['Int']>;
  Datum: Scalars['Date'];
  Eindtijd: Scalars['Date'];
  ExamenVersieID: Scalars['Int'];
  ExaminatorPersoonID: Scalars['Int'];
  LocatieID: Scalars['Int'];
  MaximumCursisten: Scalars['Int'];
  Opmerkingen?: InputMaybe<Scalars['SafeString']>;
  Prijs: Scalars['Float'];
  Promotietekst: Scalars['SafeString'];
  SessieID?: InputMaybe<Scalars['Int']>;
  Titel: Scalars['SafeString'];
  VakID: Scalars['Int'];
};

export type SaveLocationInput = {
  Contactgegevens?: InputMaybe<ContactgegevensInput>;
  ContactgegevensID?: InputMaybe<Scalars['Int']>;
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  IsActief: Scalars['Boolean'];
  LocatieID?: InputMaybe<Scalars['Int']>;
  Naam: Scalars['SafeString'];
  Routebeschrijving?: InputMaybe<Scalars['SafeString']>;
  VakgroepID?: InputMaybe<Scalars['Int']>;
};

export type SearchExamInput = {
  examId: Scalars['Int'];
};

export type SearchExamsForResultsRegistrationInput = {
  examenInstellingId: Scalars['Int'];
  orderBy: OrderByArgs;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type SearchExamVersionsInput = {
  ExamDate?: InputMaybe<Scalars['Date']>;
  VakID?: InputMaybe<Scalars['Int']>;
};

export type SearchLocationsInput = {
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  VakgroepID?: InputMaybe<Scalars['Int']>;
};

export type SearchOrganizerResult = {
  __typename?: 'SearchOrganizerResult';
  ExamenInstellingID: Scalars['Int'];
  Naam?: Maybe<Scalars['String']>;
};

export type Sessie = {
  __typename?: 'Sessie';
  Begintijd: Scalars['Date'];
  Cursus?: Maybe<Cursus>;
  CursusID: Scalars['Int'];
  Datum: Scalars['Date'];
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumBegintijd: Scalars['Date'];
  DatumEindtijd: Scalars['Date'];
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  DigitaalExamenId?: Maybe<Scalars['Int']>;
  Docent: Scalars['String'];
  Eindtijd: Scalars['Date'];
  EmailMonitor?: Maybe<Scalars['String']>;
  ExamenVersie?: Maybe<ExamenVersie>;
  ExamenVersieID?: Maybe<Scalars['Int']>;
  ExaminatorPersoon?: Maybe<Persoon>;
  ExaminatorPersoonID?: Maybe<Scalars['Int']>;
  Locatie?: Maybe<Locatie>;
  LocatieID: Scalars['Int'];
  LocatieToevoeging: Scalars['String'];
  NaamMonitor?: Maybe<Scalars['String']>;
  Opmerkingen: Scalars['String'];
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  SessieID: Scalars['Int'];
  SessieType: Scalars['String'];
  Visitatie?: Maybe<Visitatie>;
  WachtwoordMonitor?: Maybe<Scalars['String']>;
};

export enum SessieTypeEnum {
  Examen = 'EXAMEN',
  Praktijk = 'PRAKTIJK',
  Theorie = 'THEORIE'
}

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SpecialtiesInput = {
  examenInstellingId: Scalars['Int'];
  validOnly?: InputMaybe<Scalars['Boolean']>;
};

export type StatisticsPerOrganizer = {
  __typename?: 'StatisticsPerOrganizer';
  OrganizerId: Scalars['Int'];
  OrganizerName: Scalars['String'];
  OrganizerType: Scalars['String'];
  SpecialtyStatistics?: Maybe<Array<Maybe<StatisticsPerSpecialty>>>;
  VisitingData?: Maybe<VisitingData>;
};

export type StatisticsPerSpecialty = {
  __typename?: 'StatisticsPerSpecialty';
  Title: Scalars['String'];
  VakID: Scalars['Int'];
  VakType: Scalars['String'];
  VisitingData?: Maybe<VisitingData>;
};

export type Studieresultaat = {
  __typename?: 'Studieresultaat';
  Certificering?: Maybe<Certificering>;
  Cursus: Cursus;
  Datum?: Maybe<Scalars['Date']>;
  NormVersie: NormVersie;
  Persoon: Persoon;
  Status?: Maybe<Scalars['String']>;
  StudieresultaatID: Scalars['Int'];
  Vak: Vak;
};

export enum StudieresultaatStatusEnum {
  Betaald = 'BETAALD',
  Definitief = 'DEFINITIEF',
  Voorlopig = 'VOORLOPIG'
}

export type TargetSettings = {
  organizerMargin: Scalars['Float'];
  organizerTarget: Scalars['Float'];
  overallMargin: Scalars['Float'];
  overallTarget: Scalars['Float'];
  specialtyMargin: Scalars['Float'];
  specialtyTarget: Scalars['Float'];
};

export type Thema = {
  __typename?: 'Thema';
  Code: Scalars['String'];
  Naam: Scalars['String'];
  ThemaID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
};

export type TotaalExtBtwTarief = {
  __typename?: 'TotaalExtBtwTarief';
  TotaalExtBtw?: Maybe<Scalars['Float']>;
};

export type UpdateInvoiceStatusInput = {
  actionDate: Scalars['Date'];
  invoiceId: Scalars['Int'];
  isInvoiceCollection: Scalars['Boolean'];
  remarks?: InputMaybe<Scalars['SafeString']>;
  status: FactuurStatusEnum;
};

export type UpdateInvoiceStatusResult = {
  __typename?: 'UpdateInvoiceStatusResult';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type UpdatePlanningResult = {
  __typename?: 'UpdatePlanningResult';
  planned: Scalars['Boolean'];
};

export type Vaardigheid = {
  __typename?: 'Vaardigheid';
  Code: Scalars['String'];
  Omschrijving: Scalars['String'];
  VaardigheidID: Scalars['Int'];
};

export type Vak = {
  __typename?: 'Vak';
  Afkorting?: Maybe<Scalars['String']>;
  BeoordelaarNaam?: Maybe<Scalars['String']>;
  Beoordelingen?: Maybe<Array<Maybe<Beoordeling>>>;
  Code?: Maybe<Scalars['String']>;
  CompetentieID?: Maybe<Scalars['Int']>;
  CompetentieNaam?: Maybe<Scalars['String']>;
  Competenties?: Maybe<Array<Maybe<Competentie>>>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DigitaalAanbod?: Maybe<Scalars['Boolean']>;
  Docenten?: Maybe<Scalars['String']>;
  Doelgroep?: Maybe<Scalars['String']>;
  Doelstelling?: Maybe<Scalars['String']>;
  EvaluatieWijze?: Maybe<Scalars['String']>;
  ExamenInstelling?: Maybe<ExamenInstelling>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  ExamenType?: Maybe<VakExamenTypeEnum>;
  GewijzigdDatum?: Maybe<Scalars['Date']>;
  Inhoud?: Maybe<Scalars['String']>;
  IsExamenVak?: Maybe<Scalars['Boolean']>;
  Kosten?: Maybe<Scalars['Float']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  MaximumDatum?: Maybe<Scalars['Date']>;
  MinimumDatum?: Maybe<Scalars['Date']>;
  NormVersieID: Scalars['Int'];
  Praktijk?: Maybe<Scalars['String']>;
  Promotietekst?: Maybe<Scalars['String']>;
  Samenhang?: Maybe<Scalars['String']>;
  Samenvatting?: Maybe<Scalars['String']>;
  Status?: Maybe<VakStatusEnum>;
  ThemaID?: Maybe<Scalars['Int']>;
  ThemaNaam?: Maybe<Scalars['String']>;
  Themas?: Maybe<Array<Maybe<Thema>>>;
  Tijdsduur?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  VakDiscussie?: Maybe<Array<Maybe<VakDiscussie>>>;
  Vakgroep?: Maybe<Vakgroep>;
  VakgroepID?: Maybe<Scalars['Int']>;
  VakID: Scalars['Int'];
  VakKennisgebieden?: Maybe<Array<Maybe<Kennisgebied>>>;
  VakVaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  Vernieuwend?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  Werkvorm?: Maybe<Scalars['String']>;
};

export type VakDiscussie = {
  __typename?: 'VakDiscussie';
  comments?: Maybe<Array<Maybe<Comment>>>;
  title?: Maybe<Scalars['String']>;
};

export enum VakExamenTypeEnum {
  HercertificeringsExamen = 'HERCERTIFICERINGS_EXAMEN',
  StartExamen = 'START_EXAMEN'
}

export type Vakgroep = {
  __typename?: 'Vakgroep';
  ApiKey?: Maybe<Scalars['String']>;
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ContactgegevensID: Scalars['Int'];
  IsActief: Scalars['Boolean'];
  IsBtwPlichtig: Scalars['Boolean'];
  Naam: Scalars['String'];
  UniversiteitID: Scalars['Int'];
  VakgroepID: Scalars['Int'];
  WebserviceEnabled: Scalars['Boolean'];
};

export type VakgroepLink = {
  __typename?: 'VakgroepLink';
  Actief: Scalars['Boolean'];
  HoogleraarID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Vakgroep?: Maybe<Vakgroep>;
  VakgroepID: Scalars['Int'];
};

export type Vaknorm = {
  __typename?: 'Vaknorm';
  CompetentieID: Scalars['Int'];
  MinimumPunten: Scalars['Int'];
  NormVersieID: Scalars['Int'];
  ThemaID: Scalars['Int'];
  Vaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  VaknormID: Scalars['Int'];
};

export type VaknormVaardigheid = {
  __typename?: 'VaknormVaardigheid';
  IsVerplicht: Scalars['Boolean'];
  Punten: Scalars['Int'];
  Vaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  VaardigheidID: Scalars['Int'];
  VaknormID: Scalars['Int'];
  VaknormVaardigheid: Scalars['Int'];
};

export enum VakStatusEnum {
  Afgekeurd = 'AFGEKEURD',
  Goedgekeurd = 'GOEDGEKEURD',
  InOntwerp = 'IN_ONTWERP',
  Ingediend = 'INGEDIEND',
  Ingetrokken = 'INGETROKKEN',
  Voorlopig = 'VOORLOPIG',
  WordtBeoordeeld = 'WORDT_BEOORDEELD'
}

export enum VakTypeEnum {
  Bijeenkomst = 'BIJEENKOMST',
  Examen = 'EXAMEN'
}

export type Visitatie = {
  __typename?: 'Visitatie';
  DatumRapport?: Maybe<Scalars['Date']>;
  DatumVisitatie?: Maybe<Scalars['Date']>;
  PersoonID: Scalars['Int'];
  Rapport?: Maybe<Scalars['String']>;
  RapportCijfer: Scalars['Int'];
  SessieID: Scalars['Int'];
  Status: VisitatieStatusEnum;
  VisitatieID: Scalars['Int'];
  VolgensIntentieAanbod: Scalars['Boolean'];
};

export enum VisitatieStatusEnum {
  Ingediend = 'INGEDIEND',
  Ingepland = 'INGEPLAND'
}

export type VisitingData = {
  __typename?: 'VisitingData';
  AverageRate?: Maybe<Scalars['Float']>;
  AverageScoreAccordingIntention?: Maybe<Scalars['Float']>;
  LastVisitData?: Maybe<LastVisitData>;
  NrOfCourses: Scalars['Int'];
  NrOfVisits: Scalars['Int'];
  VisitTarget: Scalars['Float'];
  VisitTargetActual: Scalars['Float'];
};

export type GetMyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyQuery = { __typename?: 'Query', my?: { __typename?: 'My', Roles?: Array<string>, Persoon: { __typename?: 'Persoon', PersoonID: number } } };

export type SearchLocationsQueryVariables = Exact<{
  ExamenInstellingID: Scalars['Int'];
}>;


export type SearchLocationsQuery = { __typename?: 'Query', SearchLocations?: Array<{ __typename?: 'Locatie', LocatieID: number, Naam: string, Contactgegevens: { __typename?: 'Contactgegevens', Woonplaats: string } }> };

export type SearchOrganizersQueryVariables = Exact<{ [key: string]: never; }>;


export type SearchOrganizersQuery = { __typename?: 'Query', SearchOrganizers?: Array<{ __typename?: 'SearchOrganizerResult', Text?: string, Value: number }> };

export type SpecialtiesQueryVariables = Exact<{
  examenInstellingId: Scalars['Int'];
}>;


export type SpecialtiesQuery = { __typename?: 'Query', Specialties?: Array<{ __typename?: 'Vak', VakID: number, Afkorting?: string, Code?: string, Titel?: string, Kosten?: number, MinimumDatum?: any, MaximumDatum?: any, Promotietekst?: string, Competenties?: Array<{ __typename?: 'Competentie', Naam: string, Code: string }>, Themas?: Array<{ __typename?: 'Thema', Naam: string, Code: string }> }> };

export type SpecialtyQueryVariables = Exact<{
  vakId: Scalars['Int'];
}>;


export type SpecialtyQuery = { __typename?: 'Query', Specialty?: { __typename?: 'Vak', VakID: number, ExamenInstellingID?: number, Code?: string, Titel?: string, Promotietekst?: string, Kosten?: number, MinimumDatum?: any, MaximumDatum?: any, MaximumCursisten?: number } };

export type ExamsQueryVariables = Exact<{
  input: ExamsInput;
}>;


export type ExamsQuery = { __typename?: 'Query', Exams?: { __typename?: 'CursusNodes', totalCount: number, pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean, hasPreviousPage?: boolean }, nodes?: Array<{ __typename?: 'Cursus', CursusID: number, VakID?: number, Titel?: string, CursusCode?: string, Status?: string, AantalCursusDeelnames?: number, Sessies?: Array<{ __typename?: 'Sessie', SessieID: number, Datum: any, Locatie?: { __typename?: 'Locatie', LocatieID: number, Naam: string, Contactgegevens: { __typename?: 'Contactgegevens', ContactgegevensID: number, Woonplaats: string } } }>, CursusDeelnames?: Array<{ __typename?: 'CursusDeelname', Status: CursusDeelnameStatusEnum }> }> } };

export type ExamDetailsQueryVariables = Exact<{
  input: SearchExamInput;
}>;


export type ExamDetailsQuery = { __typename?: 'Query', ExamDetails?: { __typename?: 'Exam', Cursus?: { __typename?: 'Cursus', CursusID: number, VakID?: number, CursusleiderID?: number, Prijs?: number, Titel?: string, Promotietekst?: string, MaximumCursisten?: number, Opmerkingen?: string, Status?: string, CursusCode?: string, DatumAangemaakt?: any, DatumGewijzigd?: any, PersoonIDAangemaakt?: number, PersoonIDGewijzigd?: number, Vak: { __typename?: 'Vak', VakID: number, MinimumDatum?: any, MaximumDatum?: any, Titel?: string, ExamenInstellingID?: number, ExamenInstelling?: { __typename?: 'ExamenInstelling', Naam: string, Contactgegevens: { __typename?: 'Contactgegevens', Adresregel1: string, Huisnummer: string, HuisnummerToevoeging?: string, Woonplaats: string, Telefoon?: string, Email?: string }, ContactpersoonExamenInstelling?: Array<{ __typename?: 'ContactpersoonExamenInstelling', Persoon: { __typename?: 'Persoon', SortableFullName?: string } }> } }, Sessies?: Array<{ __typename?: 'Sessie', SessieID: number, Datum: any, Begintijd: any, Eindtijd: any, Opmerkingen: string, ExaminatorPersoon?: { __typename?: 'Persoon', PersoonID: number, SortableFullName?: string }, ExamenVersie?: { __typename?: 'ExamenVersie', ExamenVersieID: number, ExamenType: string, ExamenVersieCode: string, ExamenOmschrijving: string, StartDatum?: any, EindDatum?: any, Documenten?: Array<{ __typename?: 'ExamenVersieDocument', ExamenVersieDocumentID: number, AangemaaktDatum?: any, AangemaaktDoor?: string, Document: { __typename?: 'Document', DocumentID: number, Naam?: string, Locatie?: string, Omschrijving?: string } }> }, Locatie?: { __typename?: 'Locatie', LocatieID: number, Naam: string, Contactgegevens: { __typename?: 'Contactgegevens', ContactgegevensID: number, Woonplaats: string } } }>, CursusDeelnames?: Array<{ __typename?: 'CursusDeelname', Status: CursusDeelnameStatusEnum, Persoon: { __typename?: 'Persoon', PersoonID: number, SortableFullName?: string } }> } } };

export type ExaminersQueryVariables = Exact<{ [key: string]: never; }>;


export type ExaminersQuery = { __typename?: 'Query', Examinatoren?: Array<{ __typename?: 'Persoon', PersoonID: number, SortableFullName?: string, Contactgegevens: { __typename?: 'Contactgegevens', Woonplaats: string } }> };

export type SearchExamVersionsQueryVariables = Exact<{
  input: SearchExamVersionsInput;
}>;


export type SearchExamVersionsQuery = { __typename?: 'Query', SearchExamVersions?: Array<{ __typename?: 'ExamenVersie', Value: number, Text: string }> };

export type ExamVersionDocumentsQueryVariables = Exact<{
  input: ExamVersionDocumentsInput;
}>;


export type ExamVersionDocumentsQuery = { __typename?: 'Query', ExamVersionDocuments?: { __typename?: 'ExamenVersie', ExamenVersieCode: string, ExamenOmschrijving: string, StartDatum?: any, EindDatum?: any, Documenten?: Array<{ __typename?: 'ExamenVersieDocument', AangemaaktDoor?: string, AangemaaktDatum?: any, Document: { __typename?: 'Document', DocumentID: number, Naam?: string, Locatie?: string, Omschrijving?: string } }> } };

export type SaveExamMutationVariables = Exact<{
  input: SaveExamInput;
}>;


export type SaveExamMutation = { __typename?: 'Mutation', saveExam?: { __typename?: 'Cursus', CursusID: number } };

export type SaveLocationMutationVariables = Exact<{
  input: SaveLocationInput;
}>;


export type SaveLocationMutation = { __typename?: 'Mutation', saveLocation: { __typename?: 'Locatie', LocatieID: number, Naam: string } };

export type DeleteExamMutationVariables = Exact<{
  input: DeleteExamInput;
}>;


export type DeleteExamMutation = { __typename?: 'Mutation', deleteExam?: boolean };


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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyQuery, GetMyQueryVariables>(GetMyDocument, options);
      }
export function useGetMyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyQuery, GetMyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyQuery, GetMyQueryVariables>(GetMyDocument, options);
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
export function useSearchLocationsQuery(baseOptions: Apollo.QueryHookOptions<SearchLocationsQuery, SearchLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchLocationsQuery, SearchLocationsQueryVariables>(SearchLocationsDocument, options);
      }
export function useSearchLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchLocationsQuery, SearchLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchLocationsQuery, SearchLocationsQueryVariables>(SearchLocationsDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchOrganizersQuery, SearchOrganizersQueryVariables>(SearchOrganizersDocument, options);
      }
export function useSearchOrganizersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchOrganizersQuery, SearchOrganizersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchOrganizersQuery, SearchOrganizersQueryVariables>(SearchOrganizersDocument, options);
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
export function useSpecialtiesQuery(baseOptions: Apollo.QueryHookOptions<SpecialtiesQuery, SpecialtiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SpecialtiesQuery, SpecialtiesQueryVariables>(SpecialtiesDocument, options);
      }
export function useSpecialtiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpecialtiesQuery, SpecialtiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SpecialtiesQuery, SpecialtiesQueryVariables>(SpecialtiesDocument, options);
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
export function useSpecialtyQuery(baseOptions: Apollo.QueryHookOptions<SpecialtyQuery, SpecialtyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SpecialtyQuery, SpecialtyQueryVariables>(SpecialtyDocument, options);
      }
export function useSpecialtyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpecialtyQuery, SpecialtyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SpecialtyQuery, SpecialtyQueryVariables>(SpecialtyDocument, options);
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
      Status
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
      AantalCursusDeelnames
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
export function useExamsQuery(baseOptions: Apollo.QueryHookOptions<ExamsQuery, ExamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExamsQuery, ExamsQueryVariables>(ExamsDocument, options);
      }
export function useExamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamsQuery, ExamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExamsQuery, ExamsQueryVariables>(ExamsDocument, options);
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
        Titel
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
export function useExamDetailsQuery(baseOptions: Apollo.QueryHookOptions<ExamDetailsQuery, ExamDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExamDetailsQuery, ExamDetailsQueryVariables>(ExamDetailsDocument, options);
      }
export function useExamDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamDetailsQuery, ExamDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExamDetailsQuery, ExamDetailsQueryVariables>(ExamDetailsDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExaminersQuery, ExaminersQueryVariables>(ExaminersDocument, options);
      }
export function useExaminersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExaminersQuery, ExaminersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExaminersQuery, ExaminersQueryVariables>(ExaminersDocument, options);
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
export function useSearchExamVersionsQuery(baseOptions: Apollo.QueryHookOptions<SearchExamVersionsQuery, SearchExamVersionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchExamVersionsQuery, SearchExamVersionsQueryVariables>(SearchExamVersionsDocument, options);
      }
export function useSearchExamVersionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchExamVersionsQuery, SearchExamVersionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchExamVersionsQuery, SearchExamVersionsQueryVariables>(SearchExamVersionsDocument, options);
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
export function useExamVersionDocumentsQuery(baseOptions: Apollo.QueryHookOptions<ExamVersionDocumentsQuery, ExamVersionDocumentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExamVersionDocumentsQuery, ExamVersionDocumentsQueryVariables>(ExamVersionDocumentsDocument, options);
      }
export function useExamVersionDocumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamVersionDocumentsQuery, ExamVersionDocumentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExamVersionDocumentsQuery, ExamVersionDocumentsQueryVariables>(ExamVersionDocumentsDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveExamMutation, SaveExamMutationVariables>(SaveExamDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveLocationMutation, SaveLocationMutationVariables>(SaveLocationDocument, options);
      }
export type SaveLocationMutationHookResult = ReturnType<typeof useSaveLocationMutation>;
export type SaveLocationMutationResult = Apollo.MutationResult<SaveLocationMutation>;
export type SaveLocationMutationOptions = Apollo.BaseMutationOptions<SaveLocationMutation, SaveLocationMutationVariables>;
export const DeleteExamDocument = gql`
    mutation deleteExam($input: DeleteExamInput!) {
  deleteExam(input: $input)
}
    `;
export type DeleteExamMutationFn = Apollo.MutationFunction<DeleteExamMutation, DeleteExamMutationVariables>;

/**
 * __useDeleteExamMutation__
 *
 * To run a mutation, you first call `useDeleteExamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExamMutation, { data, loading, error }] = useDeleteExamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteExamMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExamMutation, DeleteExamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteExamMutation, DeleteExamMutationVariables>(DeleteExamDocument, options);
      }
export type DeleteExamMutationHookResult = ReturnType<typeof useDeleteExamMutation>;
export type DeleteExamMutationResult = Apollo.MutationResult<DeleteExamMutation>;
export type DeleteExamMutationOptions = Apollo.BaseMutationOptions<DeleteExamMutation, DeleteExamMutationVariables>;