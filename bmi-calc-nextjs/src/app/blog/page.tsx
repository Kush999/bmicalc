import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Health Blog - BMI and Wellness Articles | BMI Calc",
  description: "Read our latest articles about BMI, health, wellness, and fitness. Expert insights and tips for maintaining a healthy lifestyle.",
  keywords: "health blog, BMI articles, wellness tips, fitness advice, health education, nutrition, exercise",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding BMI: A Complete Guide",
      excerpt: "Learn everything you need to know about Body Mass Index, how it's calculated, and what it means for your health.",
      author: "Dr. Sarah Johnson",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "BMI Education",
      featured: true
    },
    {
      id: 2,
      title: "BMI vs. Body Fat Percentage: Which is Better?",
      excerpt: "Explore the differences between BMI and body fat percentage, and discover which measurement gives you better health insights.",
      author: "Mike Chen",
      date: "2025-01-12",
      readTime: "4 min read",
      category: "Health Science",
      featured: false
    },
    {
      id: 3,
      title: "Healthy Weight Loss: A Sustainable Approach",
      excerpt: "Discover evidence-based strategies for losing weight safely and maintaining your results long-term.",
      author: "Lisa Rodriguez",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Weight Management",
      featured: false
    },
    {
      id: 4,
      title: "BMI Limitations: When It Doesn't Tell the Full Story",
      excerpt: "Understand the limitations of BMI and learn about alternative health measurements for different populations.",
      author: "Dr. James Wilson",
      date: "2025-01-08",
      readTime: "5 min read",
      category: "Health Science",
      featured: false
    },
    {
      id: 5,
      title: "Exercise and BMI: Finding the Right Balance",
      excerpt: "Learn how regular exercise affects your BMI and overall health, with practical tips for getting started.",
      author: "Alex Thompson",
      date: "2025-01-05",
      readTime: "4 min read",
      category: "Fitness",
      featured: false
    },
    {
      id: 6,
      title: "Nutrition Tips for Healthy BMI Maintenance",
      excerpt: "Get expert advice on nutrition strategies that support a healthy BMI and overall well-being.",
      author: "Maria Garcia",
      date: "2025-01-03",
      readTime: "5 min read",
      category: "Nutrition",
      featured: false
    }
  ];

  const categories = ["All", "BMI Education", "Health Science", "Weight Management", "Fitness", "Nutrition"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, tips, and advice for maintaining a healthy lifestyle and understanding your BMI.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            {blogPosts
              .filter(post => post.featured)
              .map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-white" />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{post.category}</Badge>
                        <Badge variant="outline">Featured</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h3>
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(post => !post.featured)
                .map((post) => (
                  <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Read More
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest health tips, BMI insights, and wellness advice delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                />
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon */}
          <Card className="mt-12 text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                More Articles Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                We're constantly working on new content to help you understand BMI and maintain a healthy lifestyle. 
                Check back regularly for updates!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2">Mental Health & BMI</Badge>
                <Badge variant="outline" className="px-4 py-2">BMI for Athletes</Badge>
                <Badge variant="outline" className="px-4 py-2">Age-Related BMI Changes</Badge>
                <Badge variant="outline" className="px-4 py-2">BMI and Chronic Diseases</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
