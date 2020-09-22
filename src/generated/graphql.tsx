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
  /** Date custom scalar type */
  Date: any;
  /** Safe string custom scalar type that does not allow xss attacks */
  SafeString: any;
  /** ISO Date custom scalar type */
  ISODate: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** The Email scalar type represents E-Mail addresses compliant to RFC 822. */
  Email: any;
};

export type Query = {
  __typename?: 'Query';
  Certificaten?: Maybe<Array<Maybe<Certificaat>>>;
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  Competenties: Array<Maybe<Competentie>>;
  Contactgegevens?: Maybe<Contactgegevens>;
  CursusSessies?: Maybe<Array<Maybe<CursusSessie>>>;
  ExamenInstellingen: Array<Maybe<ExamenInstelling>>;
  /**
   * Get unpaid invoices.
   * Optionally filter by status. And apply pagination with pageSize, pageNumber and orderBy (default: createdOn, DESC)
   */
  invoices: FactuurNodes;
  Kennisgebieden: Array<Maybe<Kennisgebied>>;
  Landen: Array<Maybe<Landen>>;
  SearchLocations?: Maybe<Array<Maybe<Locatie>>>;
  /** Fetches data of the current logged in person */
  my?: Maybe<My>;
  Nationaliteiten: Array<Maybe<Nationaliteiten>>;
  SearchOrganizers?: Maybe<Array<Maybe<SearchOrganizerResult>>>;
  Persoon?: Maybe<Persoon>;
  Specialties?: Maybe<Array<Maybe<Vak>>>;
  Specialty?: Maybe<Vak>;
  tariefByCertificaatCode?: Maybe<TotaalExtBtwTarief>;
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
  ContactgegevensID: Scalars['ID'];
};


export type QueryCursusSessiesArgs = {
  input: SearchCourseSessionsInput;
};


export type QueryExamenInstellingenArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
  findById?: Maybe<Scalars['Int']>;
};


export type QueryInvoicesArgs = {
  pageSize: Scalars['Int'];
  pageNumber: Scalars['Int'];
  orderBy?: Maybe<OrderByArgs>;
  filterInvoices?: Maybe<FilterInvoicesInput>;
};


export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
};


export type QueryPersoonArgs = {
  PersoonID: Scalars['ID'];
};


export type QuerySpecialtiesArgs = {
  input: SpecialtiesInput;
};


export type QuerySpecialtyArgs = {
  vakId: Scalars['Int'];
};


export type QueryTariefByCertificaatCodeArgs = {
  certificaatCode: Scalars['String'];
  individueleAanvraag?: Maybe<Scalars['Boolean']>;
};

export type Certificaat = {
  __typename?: 'Certificaat';
  CertificaatID: Scalars['ID'];
  Code: Scalars['String'];
  Naam: Scalars['String'];
};

export type Certificering = {
  __typename?: 'Certificering';
  CertificeringID: Scalars['ID'];
  CertificaatID?: Maybe<Scalars['Int']>;
  NormVersieID?: Maybe<Scalars['Int']>;
  PersoonID?: Maybe<Scalars['Int']>;
  BeginDatum?: Maybe<Scalars['Date']>;
  EindDatum?: Maybe<Scalars['Date']>;
  Opmerkingen: Scalars['String'];
  Nummer: Scalars['String'];
  NummerWeergave: Scalars['String'];
  Status: Scalars['String'];
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


export type Pas = {
  __typename?: 'Pas';
  PasID: Scalars['ID'];
  CertificeringID: Scalars['Int'];
  DatumAanvraag: Scalars['Date'];
  DatumUitgeleverd?: Maybe<Scalars['Date']>;
  Aantal: Scalars['Int'];
  Status: Scalars['String'];
  BriefVerstuurd: Scalars['Boolean'];
  ContactgegevensID?: Maybe<Scalars['Int']>;
  Geadresseerde?: Maybe<Scalars['String']>;
  PasRetouren?: Maybe<Array<Maybe<PasRetour>>>;
};

export type PasRetour = {
  __typename?: 'PasRetour';
  PasRetourID: Scalars['ID'];
  PasID: Scalars['Int'];
  DatumRetour: Scalars['Date'];
  DatumAangemaakt: Scalars['Date'];
  AangemaaktDoor: Scalars['String'];
};

export type Competentie = {
  __typename?: 'Competentie';
  CompetentieID: Scalars['ID'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
  Code: Scalars['String'];
};

export type Contactgegevens = {
  __typename?: 'Contactgegevens';
  ContactgegevensID: Scalars['ID'];
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

export type CursusSessie = {
  __typename?: 'CursusSessie';
  CourseId: Scalars['ID'];
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

export type ExamenInstelling = {
  __typename?: 'ExamenInstelling';
  ExamenInstellingID: Scalars['ID'];
  Naam: Scalars['String'];
  IsBtwPlichtig: Scalars['Boolean'];
  IsActief: Scalars['Boolean'];
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  UniversiteitID: Scalars['Int'];
  ContactgegevensID: Scalars['Int'];
  WebserviceEnabled: Scalars['Boolean'];
  ApiKey?: Maybe<Scalars['String']>;
};

export type OrderByArgs = {
  /** The field to order by */
  field: Scalars['String'];
  /** The sort direction */
  sortDirection: SortDirectionEnum;
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** , orderBy: OrderByArgs */
export type FilterInvoicesInput = {
  PaymentStatus?: Maybe<PaymentStatusEnum>;
  FactuurNummer?: Maybe<Scalars['SafeString']>;
  FromDate?: Maybe<Scalars['ISODate']>;
  ToDate?: Maybe<Scalars['ISODate']>;
  CursusCode?: Maybe<Scalars['SafeString']>;
  InvoiceCollectionFilter?: Maybe<InvoiceCollectionsFilterEnum>;
  ForReviewersOnly?: Maybe<Scalars['Boolean']>;
  DebiteurType?: Maybe<DebiteurTypeEnum>;
  DebiteurID?: Maybe<Scalars['Int']>;
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  InvoiceStatusFilterList?: Maybe<Array<Maybe<Scalars['String']>>>;
  CrediteurType?: Maybe<Scalars['String']>;
  CrediteurID?: Maybe<Scalars['Int']>;
};

export enum PaymentStatusEnum {
  All = 'all',
  NotPaid = 'notPaid',
  Paid = 'paid'
}



export enum InvoiceCollectionsFilterEnum {
  Both = 'both',
  InvoiceCollections = 'invoiceCollections',
  NormalInvoices = 'normalInvoices'
}

export enum DebiteurTypeEnum {
  Vakgroep = 'vakgroep',
  Universiteit = 'universiteit',
  Persoon = 'persoon',
  Exameninstelling = 'exameninstelling'
}

export type FactuurNodes = {
  __typename?: 'FactuurNodes';
  /** Total nr of emails */
  totalCount: Scalars['Int'];
  /** The email objects */
  nodes?: Maybe<Array<Maybe<Factuur>>>;
  /** Page info */
  pageInfo?: Maybe<PageInfo>;
};

export type Factuur = {
  __typename?: 'Factuur';
  FactuurID: Scalars['ID'];
  FactuurNummer: Scalars['String'];
  CursusCode: Scalars['String'];
  FactuurNr: Scalars['String'];
  FactuurStatus: Scalars['String'];
  StatusOpmerkingen?: Maybe<Scalars['String']>;
  FactuurJaar: Scalars['Int'];
  IsBetaald: Scalars['Boolean'];
  FactuurDatum: Scalars['ISODate'];
  BedragExBtw: Scalars['Float'];
  BedragIncBtw: Scalars['Float'];
  BtwBedrag: Scalars['Float'];
  ProductCode: Scalars['String'];
  ProductNaam: Scalars['String'];
  DebiteurID: Scalars['Int'];
  DebiteurType: DebiteurTypeEnum;
  DebiteurNaam: Scalars['String'];
  CrediteurID: Scalars['Int'];
  CrediteurType: Scalars['String'];
  InVerzamelfactuur: Scalars['Int'];
  VerzamelFactuurID: Scalars['Int'];
  VerzamelFactuurBedrag: Scalars['Float'];
  VerzamelFactuurBTWBedrag: Scalars['Float'];
  VerzamelFactuurDatum?: Maybe<Scalars['ISODate']>;
  VerzamelFactuurOpmerking?: Maybe<Scalars['String']>;
  VerzamelFactuurIsBetaald: Scalars['Boolean'];
  VerzamelFactuurDatumBetaald?: Maybe<Scalars['ISODate']>;
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

export type Kennisgebied = {
  __typename?: 'Kennisgebied';
  KennisgebiedID: Scalars['ID'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
};

export type Landen = {
  __typename?: 'Landen';
  Value: Scalars['String'];
  Text: Scalars['String'];
};

export type SearchLocationsInput = {
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
};

export type Locatie = {
  __typename?: 'Locatie';
  LocatieID: Scalars['ID'];
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  ContactgegevensID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
  Routebeschrijving: Scalars['String'];
  IsActief: Scalars['Boolean'];
  Contactgegevens: Contactgegevens;
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
  /** Link to exameninstelling(en), via Examinator table */
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

export type Persoon = {
  __typename?: 'Persoon';
  PersoonID: Scalars['ID'];
  BSN?: Maybe<Scalars['Int']>;
  Voorletters: Scalars['String'];
  Tussenvoegsel: Scalars['String'];
  Achternaam: Scalars['String'];
  Roepnaam: Scalars['String'];
  Geslacht: Scalars['String'];
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
};


export type PersoonCertificeringenArgs = {
  alleenGeldig?: Maybe<Scalars['Boolean']>;
  perDatum?: Maybe<Scalars['Date']>;
};

export type VakgroepLink = {
  __typename?: 'VakgroepLink';
  HoogleraarID: Scalars['ID'];
  VakgroepID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Actief: Scalars['Boolean'];
  Vakgroep?: Maybe<Vakgroep>;
};

export type Vakgroep = {
  __typename?: 'Vakgroep';
  VakgroepID: Scalars['ID'];
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

export type ExamenInstellingLink = {
  __typename?: 'ExamenInstellingLink';
  ExaminatorID: Scalars['ID'];
  ExamenInstellingID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Actief: Scalars['Boolean'];
  ExamenInstelling?: Maybe<ExamenInstelling>;
};

export type Nationaliteiten = {
  __typename?: 'Nationaliteiten';
  Value: Scalars['String'];
  Text: Scalars['String'];
};

export type SearchOrganizerResult = {
  __typename?: 'SearchOrganizerResult';
  ExamenInstellingID: Scalars['ID'];
  Naam?: Maybe<Scalars['String']>;
};

export type SpecialtiesInput = {
  /** ExamenInstellingID to filter on organizers */
  examenInstellingId: Scalars['Int'];
};

export type Vak = {
  __typename?: 'Vak';
  VakID: Scalars['ID'];
  VakgroepID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  Afkorting?: Maybe<Scalars['String']>;
  Code?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  Kosten?: Maybe<Scalars['Float']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  Promotietekst?: Maybe<Scalars['String']>;
  GewijzigdDatum?: Maybe<Scalars['Date']>;
  DigitaalAanbod?: Maybe<Scalars['Boolean']>;
  MinimumDatum?: Maybe<Scalars['Date']>;
  MaximumDatum?: Maybe<Scalars['Date']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  Competenties?: Maybe<Array<Maybe<Competentie>>>;
  Themas?: Maybe<Array<Maybe<Thema>>>;
  Vakgroep?: Maybe<Vakgroep>;
  ExamenInstelling?: Maybe<ExamenInstelling>;
};

export type Thema = {
  __typename?: 'Thema';
  ThemaID: Scalars['ID'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Naam: Scalars['String'];
  Code: Scalars['String'];
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

export type Mutation = {
  __typename?: 'Mutation';
  createCourse?: Maybe<Cursus>;
  /** The `requestDuplicate` can be used to request a license card duplicate */
  requestDuplicate: RequestDuplicateResult;
  updateInvoiceStatus: UpdateInvoiceStatusResult;
  createInvoiceCollection: CreateInvoiceCollectionResult;
  /** Create or update a location */
  saveLocation: Locatie;
  singleUpload: File;
  multipleUpload: Array<File>;
  multiUpload: MultiUploadResult;
};


export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
};


export type MutationRequestDuplicateArgs = {
  input: RequestDuplicateInput;
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

export type CreateCourseInput = {
  VakID: Scalars['Int'];
  Titel: Scalars['SafeString'];
  Promotietekst: Scalars['SafeString'];
  Prijs: Scalars['Float'];
  MaximumCursisten: Scalars['Int'];
  IsBesloten: Scalars['Boolean'];
  Opmerkingen?: Maybe<Scalars['SafeString']>;
  Datum: Scalars['Date'];
  Begintijd: Scalars['Date'];
  Eindtijd: Scalars['Date'];
  LocatieID: Scalars['Int'];
  Docent?: Maybe<Scalars['SafeString']>;
};

export type Cursus = {
  __typename?: 'Cursus';
  CursusID: Scalars['ID'];
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
};

export type Sessie = {
  __typename?: 'Sessie';
  SessieID: Scalars['ID'];
  CursusID: Scalars['ID'];
  LocatieID: Scalars['ID'];
  LocatieToevoeging: Scalars['String'];
  Datum: Scalars['Date'];
  Begintijd: Scalars['Date'];
  Eindtijd: Scalars['Date'];
  Docent: Scalars['String'];
  Opmerkingen: Scalars['String'];
  SessieType: Scalars['String'];
  DigitaalExamenId?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  Locatie?: Maybe<Locatie>;
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

export type UpdateInvoiceStatusInput = {
  invoiceId: Scalars['ID'];
  isInvoiceCollection: Scalars['Boolean'];
  status: FactuurHistorieStatusEnum;
  actionDate: Scalars['ISODate'];
  remarks?: Maybe<Scalars['SafeString']>;
};

export enum FactuurHistorieStatusEnum {
  Aangemaakt = 'Aangemaakt',
  Betaald = 'Betaald',
  DoorBeAfgehandeld = 'Door_BE_Afgehandeld',
  OnjuistAangemaakt = 'OnjuistAangemaakt',
  Oninbaar = 'Oninbaar',
  Creditfactuur = 'Creditfactuur'
}

export type UpdateInvoiceStatusResult = {
  __typename?: 'UpdateInvoiceStatusResult';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type CreateInvoiceCollectionInput = {
  invoiceIds?: Maybe<Array<Scalars['ID']>>;
};

export type CreateInvoiceCollectionResult = {
  __typename?: 'CreateInvoiceCollectionResult';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  invoiceCollectionId?: Maybe<Scalars['ID']>;
};

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


export type MultiUploadResult = {
  __typename?: 'MultiUploadResult';
  result: Scalars['String'];
};


export type Studieresultaat = {
  __typename?: 'Studieresultaat';
  StudieresultaatID: Scalars['ID'];
  Datum?: Maybe<Scalars['Date']>;
  Status?: Maybe<Scalars['String']>;
  Certificering?: Maybe<Certificering>;
  Cursus?: Maybe<Cursus>;
  Persoon?: Maybe<Persoon>;
  Vak?: Maybe<Vak>;
  NormVersie?: Maybe<NormVersie>;
};

export type NormVersie = {
  __typename?: 'NormVersie';
  NormVersieID: Scalars['ID'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  Versienummer?: Maybe<Scalars['String']>;
  BeginDatum?: Maybe<Scalars['Date']>;
  EindDatum?: Maybe<Scalars['Date']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  Definitief?: Maybe<Scalars['Boolean']>;
};

export type AangemeldeCursusDeelname = {
  __typename?: 'AangemeldeCursusDeelname';
  CursusDeelnameID: Scalars['ID'];
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

export type CursusDeelname = {
  __typename?: 'CursusDeelname';
  CursusDeelnameID: Scalars['ID'];
  CursusID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Status: Scalars['String'];
  Opmerkingen?: Maybe<Scalars['String']>;
  CertificeringID?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  Cursus: Cursus;
  Certificering?: Maybe<Certificering>;
};

export type CreatePersonByPersonData = {
  /** Max 50 chars */
  Voorletters: Scalars['String'];
  /** Max 50 chars */
  Tussenvoegsel?: Maybe<Scalars['String']>;
  /** Max 50 chars */
  Achternaam: Scalars['String'];
  /** Can only be 'o', 'm, 'v' */
  Geslacht: Scalars['String'];
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
    & { Text: Locatie['Naam'], Value: Locatie['LocatieID'] }
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
    & Pick<Vak, 'VakID' | 'Afkorting' | 'Code' | 'Titel' | 'Kosten' | 'MinimumDatum' | 'MaximumDatum' | 'Promotietekst' | 'DigitaalAanbod'>
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

export type CreateCourseMutationVariables = Exact<{
  input: CreateCourseInput;
}>;


export type CreateCourseMutation = (
  { __typename?: 'Mutation' }
  & { createCourse?: Maybe<(
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
    Text: Naam
    Value: LocatieID
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
  Specialties(input: {examenInstellingId: $examenInstellingId}) {
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
    DigitaalAanbod
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
export const CreateCourseDocument = gql`
    mutation createCourse($input: CreateCourseInput!) {
  createCourse(input: $input) {
    CursusID
  }
}
    `;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, baseOptions);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
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