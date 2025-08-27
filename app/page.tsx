"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  ArrowRight,
  Download,
  Shield,
  TrendingUp,
  Users,
  Award,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function VMwareLandingPage() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", leadFormData);

      // Submit form data to MongoDB
      const response = await fetch("/api/download-case-study", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadFormData),
      });

      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Response data:", result);

      if (result.success) {
        // Trigger file download
        const downloadLink = document.createElement("a");
        downloadLink.href = "/api/download";
        downloadLink.download = "opti9-vmware-case-study.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // Show success message
        alert("Thank you! Your case study download has started.");
        setIsLeadFormOpen(false);

        // Reset form
        setLeadFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        alert(
          "Sorry, there was an error processing your request. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Sorry, there was an error processing your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const openHubSpotMeeting = () => {
    window.open(
      "https://meetings.hubspot.com/drew-jenkins1",
      "_blank",
      "width=800,height=600"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.svg"
              alt="Opti9 Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/logo-aws.png"
              alt="AWS Premier Tier Partner"
              width={100}
              height={60}
              className="h-12 w-auto"
            />
            <Button
              variant="outline"
              onClick={openHubSpotMeeting}
              className="bg-gradient-to-r from-[#FC8407] to-[#FFA726] text-white border-none hover:opacity-90"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#01356A" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                VMware Licensing Crisis
              </Badge>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Escape the {"Greater than 300%"} VMware
                <span className="text-orange-400"> Licensing Increase</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Following Broadcom&apos;s acquisition, VMware licensing costs
                are skyrocketing. Transform this challenge into an opportunity
                to modernize with AWS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isLeadFormOpen} onOpenChange={setIsLeadFormOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#FC8407] to-[#FFA726] text-white border-none hover:opacity-90"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Case Study
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Download Case Study</DialogTitle>
                      <DialogDescription>
                        Get your free copy of the Pulse Health & LensDirect case
                        study. Please fill out the form below.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleLeadFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={leadFormData.firstName}
                            onChange={(e) =>
                              setLeadFormData({
                                ...leadFormData,
                                firstName: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={leadFormData.lastName}
                            onChange={(e) =>
                              setLeadFormData({
                                ...leadFormData,
                                lastName: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={leadFormData.email}
                          onChange={(e) =>
                            setLeadFormData({
                              ...leadFormData,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          value={leadFormData.company}
                          onChange={(e) =>
                            setLeadFormData({
                              ...leadFormData,
                              company: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={leadFormData.phone}
                          onChange={(e) =>
                            setLeadFormData({
                              ...leadFormData,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">How can we help?</Label>
                        <Textarea
                          id="message"
                          value={leadFormData.message}
                          onChange={(e) =>
                            setLeadFormData({
                              ...leadFormData,
                              message: e.target.value,
                            })
                          }
                          placeholder="Tell us about your VMware challenges..."
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#FC8407] to-[#FFA726] text-white border-none hover:opacity-90 disabled:opacity-50"
                      >
                        {isSubmitting ? "Processing..." : "Download Case Study"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openHubSpotMeeting}
                  className="border-white text-white bg-white/20 hover:bg-gradient-to-r hover:from-[#FC8407] hover:to-[#FFA726] hover:border-orange-500"
                >
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="p-6 bg-white shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {"> 300%"}
                  </div>
                  <div className="text-slate-600 mb-4">
                    VMware Licensing Increase
                  </div>
                  <Separator className="my-4" />
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    $0
                  </div>
                  <div className="text-slate-600">
                    Additional AWS Migration Costs*
                  </div>
                  <div className="text-sm text-slate-500 mt-2">
                    *With 100% AWS funding programs
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Trusted by Companies Like Yours
            </h2>
            <p className="text-slate-600">
              See how Pulse Health & LensDirect escaped VMware costs and
              modernized with AWS
            </p>
          </div>

          <Card className="p-8 bg-white shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      Pulse Health & LensDirect
                    </div>
                    <div className="text-slate-600">
                      Life Science Tech & Vision Care
                    </div>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic mb-4">
                  &quot;Opti9 helped us turn that challenge into an opportunity
                  to modernize by migrating to AWS. We were able to remove, and
                  in some cases consolidate and/or upgrade, over 60
                  servers.&quot;
                </blockquote>
                <div className="font-semibold text-slate-900">
                  Robert Reynolds, CTO
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">60+</div>
                  <div className="text-sm text-slate-600">Servers Migrated</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">300%</div>
                  <div className="text-sm text-slate-600">
                    Cost Increase Avoided
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-slate-600">
                    AWS Funding Received
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-slate-600">
                    Uptime Maintained
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                The VMware Challenge
              </h2>
              <div className="space-y-6">
                <Card className="p-6 border-red-200 bg-red-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        300% Licensing Increase
                      </h3>
                      <p className="text-slate-600">
                        Broadcom&apos;s acquisition has led to substantial cost
                        hikes threatening IT budgets.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-orange-200 bg-orange-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        Fixed Resources
                      </h3>
                      <p className="text-slate-600">
                        ESXi hosts provide limited capacity that can&apos;t
                        easily scale with business demands.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-yellow-200 bg-yellow-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        Hardware Dependencies
                      </h3>
                      <p className="text-slate-600">
                        Adding capacity requires purchasing new hardware,
                        creating capital-intensive growth.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                The AWS Solution
              </h2>
              <div className="space-y-6">
                <Card className="p-6 border-green-200 bg-green-50">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        Cost Avoidance
                      </h3>
                      <p className="text-slate-600">
                        Escape VMware licensing increases while maintaining
                        comparable IT spending.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-blue-200 bg-blue-50">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        Elastic Scalability
                      </h3>
                      <p className="text-slate-600">
                        Scale resources up and down as needed, eliminating
                        hardware refresh cycles.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-purple-200 bg-purple-50">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        100% AWS Funding Support
                      </h3>
                      <p className="text-slate-600">
                        Offset implementation costs through AWS Migration
                        Acceleration Program (MAP).
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive AWS Migration Services
            </h2>
            <p className="text-xl text-slate-600">
              From assessment to ongoing management, we handle every aspect of
              your cloud journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Migration Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Assessment & Planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-account Architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Security Implementation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Server Migration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    60+ Servers Migrated
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Right-sizing & Optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Zero Downtime Migration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">CloudOps Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 Monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Disaster Recovery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cost Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#01356A" }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Escape VMware Licensing Costs?
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Download our detailed case study and see how Pulse Health &
            LensDirect successfully migrated 60+ servers to AWS while avoiding a
            300% cost increase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isLeadFormOpen} onOpenChange={setIsLeadFormOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FC8407] to-[#FFA726] text-white border-none hover:opacity-90"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Case Study
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-[#01356A]"
              onClick={openHubSpotMeeting}
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Logos Section - Moved before booking section */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Trusted by Over Thousands of Customers
            </h2>
            <p className="text-slate-600">
              Join thousands of companies who have modernized their
              infrastructure with Opti9
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-center h-16">
              <Image
                src="/logos/logo1.png"
                alt="Customer Logo"
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16">
              <Image
                src="/logos/logo2.png"
                alt="Customer Logo"
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16">
              <Image
                src="/logos/logo3.png"
                alt="Customer Logo"
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16">
              <Image
                src="/logos/logo4.png"
                alt="Customer Logo"
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16">
              <Image
                src="/logos/logo5.png"
                alt="Customer Logo"
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16">
              <Image
                src="/logos/logo6.png"
                alt="Customer Logo"
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book a Consultation Section */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Book a Free Consultation
            </h2>
            <p className="text-xl text-slate-600">
              Speak with our AWS experts about your VMware migration strategy
            </p>
          </div>

          <Card className="p-8 bg-white shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  What You&apos;ll Get:
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Free VMware cost analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    AWS migration roadmap
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Funding opportunities assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom solution recommendations
                  </li>
                </ul>
                <div className="mt-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FC8407] to-[#FFA726] text-white border-none hover:opacity-90"
                    onClick={openHubSpotMeeting}
                  >
                    Schedule Your Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/drew-jenkins.jpeg"
                      alt="Drew Jenkins"
                      width={64}
                      height={64}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    Meet with Drew Jenkins
                  </h4>
                  <p className="text-slate-600 mb-4">
                    Cloud Solutions Specialist
                  </p>
                  <div className="text-sm text-slate-500">
                    <p>✓ 30-minute consultation</p>
                    <p>✓ No sales pressure</p>
                    <p>✓ Actionable insights</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "#01356A" }}
        className="text-white py-12 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Opti9 Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-300 mb-4">
                AWS Premier Tier Partner helping companies modernize their
                infrastructure for over 10 years.
              </p>
              <div className="flex space-x-4">
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300"
                >
                  Migration & Modernization
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-slate-300"
                >
                  DevOps
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-300">
                <li>AWS Migration</li>
                <li>CloudOps Management</li>
                <li>Database Modernization</li>
                <li>Serverless Architecture</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="text-slate-300 space-y-2">
                <p>1010 N. 102nd St. Ste 201A</p>
                <p>Omaha, NE 68114</p>
                <p>Opti9tech.com</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="text-center text-slate-300">
            <p>&copy; 2025 Opti9 Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
